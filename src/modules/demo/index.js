// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import '@/styles/default.less';
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import SvgIcon from '@/components/svg-icon/SvgIcon.vue';
// import RuLayout from '@/components/layout/Layout.vue'; //共有全局layout，发布项目时切换回来
import RuLayout from '@/modules/demo/TestLayout.vue';  //私有测试用layout

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component(SvgIcon.name, SvgIcon);
Vue.component(RuLayout.name, RuLayout);

sync(store, router)

const app = new Vue({
  store,
  router,
  render: h => h(App)
})

app.$mount('#app')
