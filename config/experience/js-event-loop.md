# 事件循环

## 如何消除异步代码的传染性

```js
function timeOut(res, time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, time)
  })
}
async function m1() {
  let res = await timeOut(1)
  return ++res
}

async function m2() {
  let res = await m1()
  return ++res
}
async function m3() {
  let res = await m2()
  return ++res
}
async function main() {
  let res = await m3()
  console.log(res)
}
main() // 4
```

这个一个常见的场景: 因为 timeOut 函数是异步的，导致所有需要依赖其结果的函数都变成异步了。

对于函数式编程来说这个就很影响代码结构，在不改变原函数的情况下，消除异步的影响。

实现如下：

```js
function run(func) {
  const oldFetch = window.timeOut

  let cache = {
    status: 'pending',
    value: null
  }

  window.timeOut = function (...args) {
    if (cache.status === 'fulfilled') {
      return cache.value
    } else if (cache.status === 'rejected') {
      throw cache.value
    }

    const promise = oldFetch(...args).then(
      (res) => {
        cache.status = 'fulfilled'
        cache.value = res
      },
      (err) => {
        cache.status = 'rejected'
        cache.value = err
      }
    )
    throw promise
  }

  try {
    func()
  } catch (err) {
    if (err instanceof Promise) {
      err.then(func, func).finally(() => {
        window.timeOut = oldFetch
      })
    }
  }
}

run(main)
```

这个主要考验大家对 函数执行链 的理解 ，通过 throw 和 try catch 来打断调用链，再通过传递的 promise 来重新唤起调用链 。

这些题目都源自react中的 hooks、Suspense的实现引起的思考

本质上都是为了让函数更纯、让异步变同步、让副作用更好的管理

涉及到一些概念：比如 Continuation、CPS、Algebraic Effects
