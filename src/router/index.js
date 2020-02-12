import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home'),
    meta: { keepAlive: false, },
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/index'),
        meta: {
          keepAlive: false,
          title: 'Home Page',
        },
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/order'),
        meta: {
          keepAlive: false,
          title: 'Order',
        },
      },
      {
        path: 'reward',
        name: 'reward',
        component: () => import('../views/reward'),
        meta: {
          keepAlive: false,
          title: 'Reward',
        },
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/user'),
        meta: {
          keepAlive: false,
          title: 'Account',
        },
      }
    ],
  },
  {
    name: 'page404',
    path: '/page404',
    component: () => import('../views/page404'),
  },
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    redirect: '/page404',
  },
  {
    path: '/sample',
    component: () => import('../views/sample'),
  },
  {
    path: '/sample/getProducts',
    component: () => import('../views/sample/getProducts'),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
