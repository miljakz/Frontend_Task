<template>
  <div class="add-task-form">
    <h2>Add New Task</h2>
    <form @submit.prevent="submitTask">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="task.title" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="task.description" required></textarea>
      </div>
      <div>
        <label for="priority">Priority:</label>
        <select id="priority" v-model="task.priority" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { postTask } from '@/api/api.js';

export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        priority: 'medium'
      },
      error: null
    };
  },
  methods: {
    async submitTask() {
      try {
        await postTask(this.task);
        this.$emit('task-added');
        this.task.title = '';
        this.task.description = '';
        this.task.priority = 'medium';
        this.error = null;
      } catch (error) {
        this.error = 'Failed to add task. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
.add-task-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-task-form h2 {
  margin-bottom: 20px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
