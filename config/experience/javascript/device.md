# 设备

## 媒体判断

```js
const ua = navigator.userAgent
export const isIpad = /(iPad).*OS\s([\d_]+)/.test(ua)
export const isAndroid = /(Android);?[\s/]+([\d.]+)?(.*Mobile)/.test(ua)
export const isIphone = !isIpad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
export const isWechat = /micromessenger/i.test(ua)
export const isAlipay = /alipayclient/i.test(ua)
export const isWxApplet = isWechat && /miniprogram/i.test(ua)
export const isWxPcApplet = /MiniProgramEnv\/Windows/i.test(ua) || /MiniProgramEnv\/Mac/i.test(ua)
export const isIpod = /(iPod)(.*OS\s([\d_]+))?/.test(ua)
export const isAndroidPad = /^(?!.*Mobile).*(Android);?[\s/]+([\d.]+)?/.test(ua)
```
