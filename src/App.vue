<template>
  <div id="app">
    <header>
      <div class="center">
        <h1>TaskPal</h1>
        <img class="logo" src="@/assets/logo.png" alt="TaskPal Logo" />
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
  name: 'App',
  async created() {
    try {
      const definition = await import('eslint-scope/lib/definition.js');
      console.log('ESLint Scope Definition loaded:', definition);
    } catch (error) {
      console.error('Failed to load ESLint Scope Definition:', error);
    }
  }
};
</script>

<style>
.center {
  text-align: center;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

.logo {
  width: 100px;
  display: block;
  margin: 0 auto;
}

main {
  padding: 20px;
}

footer {
  background-color: #42b983;
  padding: 10px;
  color: white;
}
</style>
