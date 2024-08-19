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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'UserRegister',
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
    ...mapActions('auth', ['register']),
    async register() {
      await this.register({ email: this.email, password: this.password });
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
