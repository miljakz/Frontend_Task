<template>
  <div class="kanban-board container">
    <!-- Loop through each column/status -->
    <div class="kanban-column" v-for="status in statuses" :key="status">
      <h2 class="text-center">{{ status }}</h2>
      <!-- Cards within each column -->
      <draggable class="drag-area" :list="tasksForStatus(status)" group="tasks" @end="updateTaskStatus">
        <div class="task-card" v-for="task in tasksForStatus(status)" :key="task.id">
          <h4>{{ task.title }}</h4>
          <p>{{ task.description }}</p>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    draggable
  },
  computed: {
    ...mapState(['tasks']),
    statuses() {
      return ['To Do', 'In Progress', 'Completed'];
    }
  },
  methods: {
    ...mapActions(['fetchTasks', 'saveTaskStatus']),
    tasksForStatus(status) {
      return this.tasks.filter(task => task.status === status);
    },
    updateTaskStatus(event) {
      const task = event.item._underlying_vm_.task;
      const newStatus = event.to.parentElement.getAttribute('data-status');
      this.saveTaskStatus({ ...task, status: newStatus });
    }
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style scoped>
.kanban-board {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.kanban-column {
  flex: 1;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
.drag-area {
  min-height: 50px;
}
.task-card {
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: grab;
}
</style>
