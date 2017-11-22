import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/Header/header.vue'
import Daodu from '../components/Daodu/daodu.vue'
import Shujia from '../components/Shujia/shujia.vue'
import Shequ from '../components/Shequ/shequ.vue'
import My from '../components/My/my.vue'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/导读', name: 'daodu', component: Daodu},
    {path: '/书城', name: 'Header', component: Header},
    {path: '/书架', name: 'shujia', component: Shujia},
    {path: '/社区', name: 'shequ', component: Shequ},
    {path: '/我的', name: 'my', component:My}
  ]
})
