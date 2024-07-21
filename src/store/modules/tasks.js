const state = {
  tasks: [],  // Initial state for tasks
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  UPDATE_TASK_STATUS(state, { taskId, status }) {
    const task = state.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = status;  // Update the status of the task
    }
  },
};

const actions = {
  async fetchTasks({ commit }) {
    try {
      // Placeholder for API call to fetch tasks
      const fetchedTasks = await axios.get('/api/tasks');
      commit('SET_TASKS', fetchedTasks.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      // Handle the error appropriately in your application context
    }
  },
  async updateTaskStatus({ commit }, { taskId, status }) {
    try {
      // Placeholder for API call to update task status
      await axios.put(`/api/tasks/${taskId}/status`, { status });
      commit('UPDATE_TASK_STATUS', { taskId, status });
    } catch (error) {
      console.error('Failed to update task status:', error);
      // Handle the error appropriately in your application context
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
