# Promise

## 并发控制

```ts
interface ITask {
  (): Promise<unknown>
  successCallBack?: () => void
}

/**
 * 并发限制
 */
export class ThreadPool {
  // 任务队列
  taskList!: ITask[]
  //  并发限制
  limit!: number
  // 正在执行中的任务数量
  pendingCounter!: number

  constructor(option: { limit: number }) {
    this.taskList = []
    this.limit = option.limit
    this.pendingCounter = 0
  }

  // 执行任务
  __runNextTask() {
    if (this.pendingCounter >= this.limit) return

    const task = this.taskList.shift()
    if (!task) return

    this.pendingCounter = this.pendingCounter + 1

    task().finally(() => {
      this.pendingCounter = this.pendingCounter - 1

      // 调用执行结束函数
      const successCallBack = task.successCallBack
      if (typeof successCallBack === 'function') successCallBack()

      // 执行下一个任务
      this.__runNextTask()
    })
  }

  // 动态添加任务
  addTask(taskList: ITask, successCallBack?: () => void) {
    taskList.successCallBack = successCallBack
    this.taskList.push(taskList)

    this.__runNextTask()
  }
}

```
