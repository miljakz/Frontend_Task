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
/* Add your styles here */
header {
  background-color: #42b983;
  padding: 20px;
  color: white;
  text-align: center;
}

footer {
  background-color: #42b983;
  padding: 10px;
  color: white;
  text-align: center;
}
</style>
