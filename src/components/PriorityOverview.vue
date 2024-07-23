<template>
  <div class="priority-overview">
    <h2>Priority Overview</h2>
    <ul>
      <li v-for="(item, index) in priorities" :key="index">
        <span class="priority-name">{{ item.name }}</span>
        <span class="priority-value">{{ item.value }}</span>
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
.priority-overview {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.priority-overview h2 {
  margin-bottom: 10px;
  color: #42b983;
}

.priority-overview ul {
  list-style-type: none;
  padding: 0;
}

.priority-overview li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.priority-overview .priority-name {
  font-weight: bold;
}

.priority-overview .priority-value {
  font-weight: normal;
  color: #555;
}
</style>
