<template>
  <section>
    <h2>Category Summary</h2>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category.name }}: {{ category.value }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: 'Work', value: 10 },
        { name: 'Personal', value: 5 }
      ]
    };
  },
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

<style scoped>
/* Add your styles here */
</style>
