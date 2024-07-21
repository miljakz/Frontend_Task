<template>
  <div>
    <button @click="completeTask">Complete Task</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['taskId'],
  methods: {
    completeTask() {
      axios.post('/api/tasks/complete', { userId: this.$store.state.userId, taskId: this.taskId })
        .then(response => {
          alert(`Task completed! You have earned points: ${response.data.userPoints}`);
          // Trigger a state update or event to refresh the user points display
        })
        .catch(error => console.error('Error completing task:', error));
    }
  }
}
</script>
