<template>
  <div class="index-page">
    <header>
      <h1>Welcome to TaskPal</h1>
    </header>
    <main>
      <p>
        Manage your tasks efficiently and boost your productivity with TaskPal. 
        Start organizing your tasks now!
      </p>
      <router-link to="/register" class="button">Get Started</router-link>
      <router-link to="/login" class="button">Login</router-link>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
.index-page {
  text-align: center;
  margin: 20px;
}

header {
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5em;
  color: #42b983;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.button:hover {
  background-color: #36966c;
}
</style>
