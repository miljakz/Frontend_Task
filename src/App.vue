<template>
  <section>
    <h2>Tasks</h2>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask.title" placeholder="Task Title" required>
      <select v-model="newTask.category" required>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      <button type="submit" class="button">Add Task</button>
    </form>
    <h3>Filter Tasks</h3>
    <select v-model="filterCategory">
      <option value="">All</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        {{ task.title }} - {{ task.category }} <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        title: '',
        category: ''
      },
      tasks: [],
      filterCategory: '',
      categories: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.title.trim() && this.newTask.category.trim()) {
        const task = { ...this.newTask, id: Date.now() };
        this.tasks.push(task);
        this.newTask.title = '';
        this.newTask.category = '';
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  },
  computed: {
    filteredTasks() {
      if (this.filterCategory) {
        return this.tasks.filter(task => task.category === this.filterCategory);
      }
      return this.tasks;
    }
  },
  created() {
    // Fetch tasks from API or local storage
  }
};
</script>
