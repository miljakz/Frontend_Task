<template>
  <div class="category-summary">
    <h2>Category Overview</h2>
    <ul v-if="Object.keys(categories).length">
      <li v-for="(count, category) in categories" :key="category">
        <strong>{{ category }}:</strong> <span>{{ count }} tasks</span>
      </li>
    </ul>
    <p v-else>No categories found.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      categories: 'getCategoryData' // Maps this.categories to this.$store.getters.getCategoryData
    })
  },
  created() {
    this.$store.dispatch('fetchCategories'); // Dispatches an action to fetch category data when the component is created
  }
}
</script>

<style scoped>
.category-summary ul {
  list-style-type: none;
}
.category-summary li {
  margin-bottom: 10px;
}
</style>
