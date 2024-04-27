# 循环

## forEach

```js
const arr = [1, 2, 3]
arr.forEach((item) => {
  arr.push(2)
  console.log(item)
})
// 输出是什么？会死循环吗？
// 1 2 3

const arr2 = [1, 2, 3]
arr2.forEach((item, i) => {
  arr2.splice(i, 1)
  console.log('arr2', item)
})

// 输出是什么？

const arr3 = [, , 3, , 5]
arr3.forEach((item, i) => {
  arr3.splice(i, 1)
  console.log('arr3', item)
})
// 稀疏数组 输出是什么？会输出undefined 还是null？
```
