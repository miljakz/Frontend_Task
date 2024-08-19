<template>
  <form @submit.prevent="register">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <button type="submit">Register</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, this.email, this.password);
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
