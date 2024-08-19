import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import LoginForm from '../components/LoginForm.vue';
import Dashboard from '../views/Dashboard.vue';
import Index from '../views/Index.vue';
import { getAuth } from 'firebase/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!getAuth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    console.log(`Authentication required for ${to.path}, redirecting to /login`);
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    console.log(`Already authenticated, redirecting from /login to /dashboard`);
    next('/dashboard');
  } else {
    console.log(`Proceeding to ${to.path}`);
    next();
  }
});

export default router;
