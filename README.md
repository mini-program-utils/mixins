## miniprgram-mixin

As we know, in the miniprogram, `Component` has [`behaviors`](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html) to reuse the same logics.But if we want to reuse these logics in `Page`, there is no solution.

`miniprogram-mixin` works.

---

### install

```bash
yarn add miniprogram-mixin
```

### usage

#### require it in `app.js`

```js
// app.js
require('miniprogram-mixin');
```

Now you can use mixin happily.

```js
// mixin/mixinA.js
module.exports = {
  data: {},
  onLoad() {}
}
```

**tips: You need to read the npm support [documentation](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html) for the miniprogram**

---

### demo

- in the `demo/` directory

- You can also open the code snippet [link](https://developers.weixin.qq.com/s/gcfqzZm87lbW) in wechat devtools.

---

#### LICENSE

[MIT](./LICENSE)