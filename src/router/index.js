import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home.vue'; 
import UserRegister from '../components/Register.vue';  
import LoginForm from '../components/LoginForm.vue';  
import UserDashboard from '../views/Dashboard.vue';  
import LandingPage from '../views/Index.vue';  
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Ensure these are imported

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Add navigation guard to check for logged-in users
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
