# 正则

[在线可视化工具](https://regexper.com/)

## 常用正则

```js
// 常规手机号码 13688889999
export const mobileRegexp = /^(1[3|4|5|6|7|8|9][0-9]\d{8})$/

// 手机号码，支持分机号 13688889999-1234
export const mobileWithExtRegep = /^(1[3|4|5|6|7|8|9][0-9]\d{8})(?:-?(\d{1}|\d{2}|\d{3}|\d{4}))?$/

// 固定电话，支持的格式 28285656 010-28285656 0472-28285656 400-2828565666 800-2828565666
export const telephoneRegep = /^((?:0\d{2}-?\d{8})|(?:0\d{3}-?\d{8})|(?:0\d{2}-?\d{7})|(?:0\d{3}-?\d{7})|(?:^(?!400|800)\d{7,8})|(?:[48]00-?\d{5,10}))$/

// 邮箱
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 中文
export const chineseRegexp = /[\u4e00-\u9fa5]/g

// 特殊字符
export const specialRegexp = /[`~!@#$%^&*()_\-+=<>?:"{}.'[\]·~！@#￥%……&*（）——\-+={}《》？：“”【】、；‘'。、〈〉√［］〔〕]/g

// 空字符
export const emptyRegexp = /^$/

// 空格
export const whiteSpaceRegep = /\s*/g

// IPV 4 
export const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// IPV 6
export const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

```

## 动态生成正则

```ts
function createRegExp(pattern: string, flags: string) {
  const str = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  return new RegExp(str, flags)
}
```
