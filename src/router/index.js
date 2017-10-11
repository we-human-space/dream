import Vue from 'vue';
import Router from 'vue-router';
import MainDream from '@/components/Dream/MainDream';
import MainLife from '@/components/Life/MainLife';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dream',
      component: MainDream
    },
    {
      path: '/life',
      name: 'Life',
      component: MainLife
    }
  ]
});
