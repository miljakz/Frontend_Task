<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required>
    <button type="submit" class="button">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard'); // Redirect to the dashboard or appropriate page
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
