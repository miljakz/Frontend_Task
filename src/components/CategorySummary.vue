<template>
  <section>
    <h2>Category Summary</h2>
    <ul>
      <li v-for="category in categories" :key="category.name">
        {{ category.name }}: {{ category.count }} tasks
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CategorySummary',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Basic styles */
ul {
  list-style-type: none;
  padding: 0;
}
</style>
