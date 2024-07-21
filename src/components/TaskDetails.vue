<template>
  <div>
    <h1>Task Details</h1>
    <p>Title: {{ task.title }}</p>
    <p>Description: {{ task.description }}</p>
    <label for="completion">Completion Percentage:</label>
    <input type="range" id="completion" min="0" max="100" v-model="task.completionPercentage" @change="updateCompletion">
    <p>{{ task.completionPercentage }}%</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      task: {}
    };
  },
  created() {
    this.fetchTask();
  },
  methods: {
    fetchTask() {
      const taskId = this.$route.params.id; // Assume you have task ID from the route
      axios.get(`/api/task/${taskId}`)
        .then(response => {
          this.task = response.data;
        })
        .catch(error => {
          console.error("Error fetching task:", error);
        });
    },
    updateCompletion() {
      axios.put('/api/task/updateCompletion', {
        taskId: this.task._id,
        completionPercentage: this.task.completionPercentage
      })
      .then(response => {
        console.log("Update successful:", response);
      })
      .catch(error => {
        console.error("Error updating completion percentage:", error);
      });
    }
  }
}
</script>
