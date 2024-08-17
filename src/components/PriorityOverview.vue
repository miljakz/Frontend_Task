<template>
  <div class="priority-overview">
    <h2>Priority Overview</h2>
    <ul>
      <li v-for="priority in priorities" :key="priority.name">
        {{ priority.name }}: {{ priority.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PriorityOverview',
  data() {
    return {
      priorities: [
        { name: 'High', value: 10 },
        { name: 'Medium', value: 5 },
        { name: 'Low', value: 2 }
      ]
    };
  }
};
</script>

<style scoped>
/* Basic styles */
.priority-overview {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 10px;
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
</style>
