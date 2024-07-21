<template>
  <div class="task-detail">
    <h2>{{ task.title }}</h2>
    <p>{{ task.description }}</p>
    <subtask v-for="subtask in task.subtasks" :key="subtask._id" :subtask="subtask"/>
    <button @click="addSubtask">Add Subtask</button>
  </div>
</template>

<script>
import Subtask from '../components/Subtask.vue';

export default {
  components: { Subtask },
  data() {
    return {
      task: {
        title: '',
        description: '',
        subtasks: []
      }
    };
  },
  methods: {
    addSubtask() {
      // Implementation to add a subtask
    }
  }
}
</script>
