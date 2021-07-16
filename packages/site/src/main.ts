import { createApp } from 'vue';
import elementPlus from '~/plugin/element-plus';
import App from './App.vue';

import router from './router';

const app = createApp(App);
app.use(router);
app.use(elementPlus);
app.mount('#app');

document.title = import.meta.env.VITE_APP_TITLE;
