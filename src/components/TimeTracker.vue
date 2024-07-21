<template>
  <div>
    <button @click="startTime">Start Time</button>
    <button @click="stopTime">Stop Time</button>
    <div v-for="entry in timeEntries" :key="entry._id">
      Started: {{ entry.startTime }} - Ended: {{ entry.endTime }} - Duration: {{ entry.duration }} seconds
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      timeEntries: [],
      currentEntry: null
    };
  },
  methods: {
    startTime() {
      const taskId = this.$route.params.taskId; // assuming task ID is in the route
      axios.post('/api/time/start', { user: 'userId', task: taskId })
        .then(response => {
          this.currentEntry = response.data;
        })
        .catch(error => console.error('Error starting time:', error));
    },
    stopTime() {
      if (!this.currentEntry) return;
      axios.post(`/api/time/stop/${this.currentEntry._id}`)
        .then(response => {
          this.timeEntries.push(response.data);
          this.currentEntry = null;
        })
        .catch(error => console.error('Error stopping time:', error));
    }
  }
}
</script>
