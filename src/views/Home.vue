<template>
  <div>
    <CategoryManager />
    <TaskManager />
  </div>
</template>

<script>
import CategoryManager from '@/components/CategoryManager.vue';
import TaskManager from '@/components/TaskManager.vue';

export default {
  components: {
    CategoryManager,
    TaskManager
  }
};
</script>
