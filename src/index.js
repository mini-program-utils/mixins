const originPage = Page;
const originComponent = Component;

const originProperties = ['data', 'properties', 'options'];
const originMethods = [
  'onLoad',
  'onReady',
  'onShow',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll',
  'onTabItemTap'
];

function merge(mixins, config) {
  if (!Array.isArray(mixins)) return;
  mixins.forEach(mixinItem => {
    if (Object.prototype.toString.call(mixinItem) !== '[object Object]') {
      throw new Error(`mixin type must be Object`);
    }
    for (let [key, value] of Object.entries(mixinItem)) {
      if (originProperties.includes(key)) {
        config[key] = { ...value, ...config[key] };
      } else if (originMethods.includes(key)) {
        const originFunction = config[key];
        config[key] = function(...args) {
          value.call(this, ...args);
          return originFunction && originFunction.call(this, ...args);
        };
      } else {
        config = { ...config, ...mixinItem };
      }
    }
  });
}

Page = config => {
  if (Array.isArray(config.mixins)) {
    config = merge(config, config.mixins);
  }
  originPage(config);
};

Component = config => {
  if (Array.isArray(config.mixins)) {
    config = merge(config, config.mixins);
  }
  originComponent(config);
};
