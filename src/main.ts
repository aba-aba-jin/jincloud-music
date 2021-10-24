import * as vue from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router';
import { Swipe, SwipeItem, ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import 'vant/lib/index.css'; // 全局引入样式
import './index.less';
import './lib/rem.js';

const app = vue.createApp(App);
app.use(Swipe)
    .use(SwipeItem)
    .use(ActionBar)
    .use(ActionBarIcon)
    .use(ActionBarButton)
    .use(router)
    .mount('#app')
