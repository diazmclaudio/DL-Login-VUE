import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Firebase from 'firebase/app'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: "/login"
  },
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from , next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
  next( '/' );
  } else if (user && !authRequired) {
  next( '/' );
  } else {
  next();
  }
  });

export default router
