<template>
  <section>
    <h2>Task Manager</h2>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask.title" placeholder="Task Title" required />
      <select v-model="newTask.category" required>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.category }}
        <button @click="removeTask(task.id)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TaskManager',
  data() {
    return {
      newTask: {
        title: '',
        category: ''
      },
      tasks: [],
      categories: ['Work', 'Personal', 'Hobby']
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
  }
};
</script>

<style scoped>
/* Basic styles */
form {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 10px;
}
</style>
