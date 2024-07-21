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
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
