<template>
  <div>
    <CategoryManagerComponent />
    <TaskManagerComponent />
  </div>
</template>

<script>
import CategoryManagerComponent from '@/components/CategoryManager.vue';
import TaskManagerComponent from '@/components/TaskManager.vue';

export default {
  components: {
    CategoryManagerComponent,
    TaskManagerComponent
  }
};
</script>
