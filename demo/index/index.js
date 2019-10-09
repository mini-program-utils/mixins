const mixinA = require('../mixins/mixinA');
Page({
  data: {
    
  },
  mixins: [mixinA],
  onLoad: function () {
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
