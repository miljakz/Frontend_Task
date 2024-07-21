<template>
  <div class="subtask">
    <input type="checkbox" v-model="subtask.completed" @change="updateSubtask">
    <input type="text" v-model="subtask.title" @blur="updateSubtask">
    <input type="date" v-model="subtask.dueDate" @change="updateSubtask">
    <select v-model="subtask.priority" @change="updateSubtask">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <input type="range" min="0" max="100" v-model="subtask.progress" @change="updateSubtask">
    <span>{{ subtask.progress }}%</span>
  </div>
</template>

<script>
export default {
  props: ['subtask'],
  methods: {
    updateSubtask() {
      // Emit an event to the parent component to handle the API call
      this.$emit('update-subtask', this.subtask);
    }
  }
}
</script>

<style scoped>
.subtask {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.subtask input[type="range"], .subtask input[type="text"], .subtask input[type="date"] {
  flex: 1;
}

.subtask select {
  flex: 0.5;
}
</style>
