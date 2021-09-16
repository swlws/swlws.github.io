// ServiceWorkerGlobalScope上下文中注册message事件
// 当监听到消息时，转发给每一个客户端
self.addEventListener('message', function (ev) {
  ev.waitUntil(
    self.clients.matchAll().then(function (clients) {
      if (!clients || clients.length === 0) {
        return;
      }

      // 向每一个客户端发送消息，包括自身
      clients.forEach(function (client) {
        client.postMessage(ev.data);
      });
    }),
  );
});
