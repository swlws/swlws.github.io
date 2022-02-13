# Promise 并发

## 滑动窗口

```js
function log(v) {
  return new Promise((r) => {
    setTimeout(() => {
      console.log("log", v);
      r(v);
    }, Math.ceil(Math.random() * 1000));
  });
}

function limit(limit, params, fn) {
  let num = 0;
  const values = [];
  const data = params.map((value, index) => ({ value, index }));

  const ge = (p, r) => {
    num++;
    return fn(p.value).then((res) => {
      num--;
      values[p.index] = res;

      const el = data.shift();
      el ? ge(el, r) : void 0;

      num === 0 ? r(values) : void 0;
    });
  };

  return new Promise((r) => {
    for (let i = 0; i < limit; i++) {
      ge(data.shift(), r);
    }
  });
}

limit(3, [11, 22, 33, 44, 55, 66, 77], log).then((res) => {
  console.log("end", res);
});
```
