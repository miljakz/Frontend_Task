<template>
  <div id="app">
    <header>
      <div class="center">
        <h1>TaskPal</h1>
        <img class="logo" src="@/assets/logo.png" alt="TaskPal Logo">
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="center">
      <p>© 2023 TaskPal. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>

</style>
