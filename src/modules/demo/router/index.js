import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCookies } from '@/utils/cookies'

import Dict from '../views/dict/Dict.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/dict', name: 'Dict', component: Dict, meta: { title: '字典管理', auth: true } },
    { path: '*', redirect: { path: 'dict' } },
  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  let { title, auth = false } = meta
  if (title)
    document.title = '示例' + ' - ' + title || 'SKYES'
  next()
})

export default router
