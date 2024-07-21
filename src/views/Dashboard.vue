<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="widgets">
      <category-summary />
      <task-summary />
      <priority-overview />
    </div>
  </div>
</template>

<script>
import CategorySummary from '@/components/CategorySummary.vue';
import TaskSummary from '@/components/TaskSummary.vue';
import PriorityOverview from '@/components/PriorityOverview.vue';

export default {
  components: {
    CategorySummary,
    TaskSummary,
    PriorityOverview
  }
}
</script>

<style scoped>
.dashboard .widgets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>