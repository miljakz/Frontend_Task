import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import LoginForm from '../components/LoginForm.vue'; // Updated reference
import Dashboard from '../views/Dashboard.vue';
import Index from '../views/Index.vue'; // Ensure this file exists in the path
import { getAuth } from 'firebase/auth'; // Import Firebase authentication

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
    name: 'LoginForm', // Updated name to LoginForm
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!getAuth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
