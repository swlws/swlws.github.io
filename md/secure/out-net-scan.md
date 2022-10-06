---
editLink: false
head:
  - - meta
    - name: author
      content: swlws
  - - meta
    - name: description
      content: 从外部视角查看服务器上的资产
  - - meta
    - name: keywords
      content: 扫描器 资产 域名 证书 端口 站点
---

# 外网探测

外网扫描器，从外部视角查看服务器的安全信息

## 资产测绘

探测目标机器的可能存在的资产

资产属性

- 名称
- 版本号

## 域名解析

使用 DNS 域名系统解析，两种形式：

- 域名 --> IP 地址
- IP 地址 --> 域名

### 域名 --> IP 地址

- [node.js api - dns.lookup](https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnslookuphostname-options-callback)
- [node.js api - dns.resolve](https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnsresolvehostname-rrtype-callback)
- [riskiq api](https://api.riskiq.net/api/concepts.html)

### IP 地址 --> 域名

- [node.js api - dns.reverse](https://nodejs.org/dist/latest-v17.x/docs/api/dns.html#dnsreverseip-callback)

## 域名爆破

找出给定域名的子域名，实现方式：

- 域名字典
- 搜索引擎
- 证书透明（Certificate Transparency）
- 在线工具

### 域名字典

- [github - subDomainsBrute](https://github.com/lijiejie/subDomainsBrute/blob/master/dict/subnames_full.txt)
- [在线工具 - 域名字典实现](https://phpinfo.me/domain/)

### 搜索引擎

- bing.cn（必应）
- baidu.com（百度）

语法：

> site:abc.com -site:www.abc.com

### 证书透明

一个 SSL/TLS 证书通常包含域名、子域名和邮件地址。示例`cn.bing.com`的证书允许的域名：

```js
{
  subject: { CN: 'www.bing.com' },
  issuer: {
    C: 'US',
    O: 'Microsoft Corporation',
    CN: 'Microsoft RSA TLS CA 01'
  },
  subjectaltname: 'DNS:www.bing.com, DNS:dict.bing.com.cn, DNS:*.platform.bing.com, DNS:*.bing.com, DNS:bing.com, DNS:ieonline.microsoft.com, DNS:*.windowssearch.com, DNS:cn.ieonline.microsoft.com, DNS:*.origin.bing.com, DNS:*.mm.bing.net, DNS:*.api.bing.com, DNS:ecn.dev.virtualearth.net, DNS:*.cn.bing.net, DNS:*.cn.bing.com, DNS:ssl-api.bing.com, DNS:ssl-api.bing.net, DNS:*.api.bing.net, DNS:*.bingapis.com, DNS:bingsandbox.com, DNS:feedback.microsoft.com, DNS:insertmedia.bing.office.net, DNS:r.bat.bing.com, DNS:*.r.bat.bing.com, DNS:*.dict.bing.com.cn, DNS:*.dict.bing.com, DNS:*.ssl.bing.com, DNS:*.appex.bing.com, DNS:*.platform.cn.bing.com, DNS:wp.m.bing.com, DNS:*.m.bing.com, DNS:global.bing.com, DNS:windowssearch.com, DNS:search.msn.com, DNS:*.bingsandbox.com, DNS:*.api.tiles.ditu.live.com, DNS:*.ditu.live.com, DNS:*.t0.tiles.ditu.live.com, DNS:*.t1.tiles.ditu.live.com, DNS:*.t2.tiles.ditu.live.com, DNS:*.t3.tiles.ditu.live.com, DNS:*.tiles.ditu.live.com, DNS:3d.live.com, DNS:api.search.live.com, DNS:beta.search.live.com, DNS:cnweb.search.live.com, DNS:dev.live.com, DNS:ditu.live.com, DNS:farecast.live.com, DNS:image.live.com, DNS:images.live.com, DNS:local.live.com.au, DNS:localsearch.live.com, DNS:ls4d.search.live.com, DNS:mail.live.com, DNS:mapindia.live.com, DNS:local.live.com, DNS:maps.live.com, DNS:maps.live.com.au, DNS:mindia.live.com, DNS:news.live.com, DNS:origin.cnweb.search.live.com, DNS:preview.local.live.com, DNS:search.live.com, DNS:test.maps.live.com, DNS:video.live.com, DNS:videos.live.com, DNS:virtualearth.live.com, DNS:wap.live.com, DNS:webmaster.live.com, DNS:webmasters.live.com, DNS:www.local.live.com.au, DNS:www.maps.live.com.au',
}
```

查找某个域名所属证书的最简单的方法就是使用搜索引擎搜索一些公开的 CT 日志。

在线工具：

- https://crt.sh/

API 实现：

- [node.js api - tlsSocket.getPeerFinished](http://nodejs.cn/api/tls.html#tlssocketgetpeerfinished)

### 在线工具

- https://phpinfo.me/domain/

## IP 探测

从外部视角，查看可连接的 IP 地址。 给定 IP 段（192.168.10.1/24），解析出存活的 IP

实现方式：

- ping
- tcpping

## 端口探测

从外部视角，查看机器上存活的端口（开放端口）。给定 IP 地址，检测存活端口（监听端口是存活端口的子集）。

实现方式：

- tcpping

## Web 站点探测

探测目标服务器上可能存在的站点信息，尽可能多的信息

站点属性：

- 站点路径
- Web 容器类型、版本号

## Web 站点指纹

使用文件 md5、Response 等生成网站的指纹

## 参考

[参考：子域名探测方法大全](https://www.cnblogs.com/forforever/p/14197630.html)
