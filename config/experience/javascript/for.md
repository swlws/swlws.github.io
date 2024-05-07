# 循环

## forEach

```js
const arr = [1, 2, 3]
arr.forEach((item) => {
  arr.push(2)
  console.log(item)
})
// 输出是什么？会死循环吗？
// 输出：1 2 3

const arr2 = [1, 2, 3]
arr2.forEach((item, i) => {
  arr2.splice(i, 1)
  console.log(item)
})
// 输出是什么？
// 输出：1 3

const arr3 = [, , 3, , 5]
arr3.forEach((item, i) => {
  arr3.splice(i, 1)
  console.log('arr3', item)
})
// 稀疏数组 输出是什么？会输出 undefined 还是null？
// 输出：3 5
```

[ECMA forEach 实现规范](https://262.ecma-international.org/6.0/#sec-array.prototype.foreach)

按照规范代码实现：

```js
Array.prototype._forEach = function (callback) {
  // Let len be ToLength(Get(O, "length")).
  let len = this.length
  // Let k be 0.
  let k = 0
  // Repeat, while k < len
  while (k < len) {
    // If kPresent is true, then
    if (k in this) {
      // Let kValue be Get(O, Pk).
      let kValue = this[k]
      // Let funcResult be Call(callbackfn, T, «kValue, k, O»).
      callback(kValue, k, this)
    }
    // Increase k by 1.
    k++
  }
  // Return undefined.
  return undefined
}
```
