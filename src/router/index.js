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
  const isAuthenticated = getAuth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');  // Redirect to login if the route requires auth and the user is not authenticated
  } else if (to.path === '/login' && isAuthenticated) {
    next('/dashboard');  // Redirect to dashboard if the user is authenticated and tries to access the login page
  } else {
    next();  // Allow navigation to the intended route
  }
});

export default router;
