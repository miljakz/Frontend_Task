<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <PriorityOverview />
    <TaskSummary :tasks="tasks" />

    <!-- Add the form for adding new tasks -->
    <AddTaskForm @task-added="fetchTasks" />
  </div>
</template>

<script>
import PriorityOverview from '@/components/PriorityOverview.vue';
import TaskSummary from '@/components/TaskSummary.vue';
import AddTaskForm from '@/components/AddTaskForm.vue';  // Import the form component
import { fetchTasks } from '@/api/api.js';

export default {
  name: 'UserDashboard',
  components: {
    PriorityOverview,
    TaskSummary,
    AddTaskForm  // Register the form component
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async fetchTasks() {
      try {
        this.tasks = await fetchTasks();
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    }
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.dashboard h1 {
  margin-bottom: 20px;
  color: #42b983;
}
</style>
