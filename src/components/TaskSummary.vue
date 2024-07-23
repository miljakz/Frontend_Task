<template>
  <div class="task-summary">
    <h2>Task Summary</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span class="task-name">{{ task.name }}</span>
        <span class="task-status">{{ task.status }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskSummary',
  data() {
    return {
      tasks: [
        { name: 'Complete Vue.js tutorial', status: 'In Progress' },
        { name: 'Write documentation', status: 'Completed' },
        { name: 'Update dependencies', status: 'Pending' }
      ]
    };
  }
};
</script>

<style scoped>
.task-summary {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.task-summary h2 {
  margin-bottom: 10px;
  color: #42b983;
}

.task-summary ul {
  list-style-type: none;
  padding: 0;
}

.task-summary li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.task-summary .task-name {
  font-weight: bold;
}

.task-summary .task-status {
  font-weight: normal;
  color: #555;
}
</style>
