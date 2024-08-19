<template>
  <section>
    <h2>Manage Categories</h2>
    <form @submit.prevent="addCategory">
      <input type="text" v-model="newCategory" placeholder="New Category" required />
      <button type="submit" class="button">Add Category</button>
    </form>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
        <button @click="removeCategory(category)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CategoryManager',
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
  }
};
</script>

<style scoped>
/* Basic styles */
button {
  margin-left: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
}

button:hover {
  background-color: #36966c;
}
</style>
