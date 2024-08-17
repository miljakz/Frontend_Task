<template>
  <section>
    <h2>Task Summary</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.category }} ({{ task.status }})
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TaskSummary',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* Basic styles */
ul {
  list-style-type: none;
  padding: 0;
}
</style>
