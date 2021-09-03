import { App } from 'vue';

import BaseMenu from '~/components/BaseMenu/main';

const components = [BaseMenu];

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
