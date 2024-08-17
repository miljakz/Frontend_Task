<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <button type="submit">Login</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style scoped>
/* Basic styles */
form {
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
