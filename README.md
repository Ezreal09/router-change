# router-change
一个监听vue和react路由切换的工具

```js
import routerChange from 'router-change';
const pv = 1;
const testFn = () => {
  pv++;
  console.log('pagePv', pv);
}

routerChange(testFn);
```
