# 代码片段

class

```ts
import { TPlainObject } from "../typings";

class Size<T extends TPlainObject | TPlainObject[]>
  implements TSizeAction<T>, TSizeAction2
{
  data!: T;
  constructor(v: T) {
    this.data = v;
  }

  size(): number {
    console.log(`call method size`);
    return 1;
  }

  length() {
    const len = Object.keys(this.data).length;
    console.log(len);
    return len;
  }
}

interface TSizeConstructor<T> {
  new (v: T): TSizeAction<T> & TSizeAction2;
}
interface TSizeAction<T> {
  data: T;
  length: () => number;
}
interface TSizeAction2 {
  size(): number;
}

function createSiz<T>(c: TSizeConstructor<T>, v: T) {
  return new c(v);
}
let a = createSiz(Size, { a: 123 });
a.length();
a.size();
```
