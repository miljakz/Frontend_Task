import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Axios from 'axios'; // Import Axios for global HTTP requests

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-8IoWSYxNhvNAHq18yOe5S1B6nZKJQ4",
  authDomain: "task-e1b5f.firebaseapp.com",
  projectId: "task-e1b5f",
  storageBucket: "task-e1b5f.appspot.com",
  messagingSenderId: "877382835559",
  appId: "1:877382835559:web:b315dbc787c26643d323c2",
  measurementId: "G-PZGJGBVYD5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Configure Axios as a Vue prototype to be used globally
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = process.env.VUE_APP_API_URL; // Set the base URL for Axios based on the environment variable

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
