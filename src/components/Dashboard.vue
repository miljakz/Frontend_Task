<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <PriorityOverview />
    <TaskSummary />
  </div>
</template>

<script>
import PriorityOverview from '@/components/PriorityOverview.vue';
import TaskSummary from '@/components/TaskSummary.vue';

export default {
  name: 'UserDashboard',
  components: {
    PriorityOverview,
    TaskSummary
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
