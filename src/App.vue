<template>
  <div id="app">
    <header>
      <h1>Welcome to TaskPal</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2023 TaskPal. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Basic styles */
header, footer {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
