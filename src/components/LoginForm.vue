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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters('auth', ['getAuthError']),
    error() {
      return this.getAuthError;
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async login() {
      await this.login({ email: this.email, password: this.password });
      if (!this.getAuthError) {
        this.$router.push('/dashboard');
      }
    }
  }
};
</script>

<style scoped>
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
