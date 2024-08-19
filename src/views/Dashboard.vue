<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <PriorityOverviewComponent />
    <TaskSummaryComponent />
  </div>
</template>

<script>
import PriorityOverviewComponent from '@/components/PriorityOverview.vue';
import TaskSummaryComponent from '@/components/TaskSummary.vue';

export default {
  name: 'UserDashboard',
  components: {
    PriorityOverviewComponent,
    TaskSummaryComponent
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
