<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
