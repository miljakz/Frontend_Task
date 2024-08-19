<template>
  <div class="home">
    <CategoryManagerComponent />
    <TaskManagerComponent />
  </div>
</template>

<script>
import CategoryManagerComponent from '@/components/CategoryManager.vue';
import TaskManagerComponent from '@/components/TaskManager.vue';

export default {
  name: 'HomePage',  // Added multi-word name
  components: {
    CategoryManagerComponent,
    TaskManagerComponent
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.home h1 {
  margin-bottom: 20px;
  color: #42b983;
}
</style>
