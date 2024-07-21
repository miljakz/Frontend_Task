<template>
  <section>
    <h2>Manage Categories</h2>
    <form @submit.prevent="addCategory">
      <input type="text" v-model="newCategory" placeholder="New Category" required>
      <button type="submit" class="button">Add Category</button>
    </form>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }} <button @click="removeCategory(category)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newCategory: '',
      categories: []
    };
  },
  methods: {
    addCategory() {
      if (this.newCategory.trim()) {
        this.categories.push(this.newCategory);
        this.newCategory = '';
      }
    },
    removeCategory(category) {
      this.categories = this.categories.filter(cat => cat !== category);
    }
  },
  created() {
    // Fetch categories from API or local storage
  }
};
</script>
