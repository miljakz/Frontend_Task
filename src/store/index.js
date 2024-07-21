import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    tasks: [],
    categories: {},
    loading: false,
    error: null,
    pomodoro: {
      sessionCount: 0,
      inSession: false,
      sessionTime: 1500, // Default 25 minutes; can be adjusted
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    updateTaskStatus(state, { taskId, status }) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.status = status;
      }
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    incrementSessionCount(state) {
      state.pomodoro.sessionCount++;
    },
    setInSession(state, inSession) {
      state.pomodoro.inSession = inSession;
    },
    setSessionTime(state, time) {
      state.pomodoro.sessionTime = time;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    },
    fetchTasks({ commit }) {
      commit('setLoading', true);
      commit('clearError');
      axios.get('/api/tasks')
        .then(response => {
          commit('setTasks', response.data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error.response ? error.response.data.message : 'Failed to fetch tasks');
          commit('setLoading', false);
        });
    },
    updateTaskStatus({ commit }, { taskId, status }) {
      commit('setLoading', true);
      commit('clearError');
      axios.put(`/api/tasks/${taskId}/status`, { status })
        .then(() => {
          commit('updateTaskStatus', { taskId, status });
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error.response ? error.response.data.message : 'Failed to update task status');
          commit('setLoading', false);
        });
    },
    fetchCategories({ commit }) {
      commit('setLoading', true);
      commit('clearError');
      axios.get('/api/categories')
        .then(response => {
          commit('setCategories', response.data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error.response ? error.response.data.message : 'Failed to fetch categories');
          commit('setLoading', false);
        });
    },
    startPomodoroSession({ commit }) {
      commit('setInSession', true);
      // Further logic to handle timer etc. would typically be handled in the component or here
    },
    completePomodoroSession({ commit }) {
      commit('incrementSessionCount');
      commit('setInSession', false);
      // May trigger notifications or other UI updates
    },
    updateSessionTime({ commit }, time) {
      commit('setSessionTime', time);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
    allTasks: state => state.tasks,
    getCategoryData: state => state.categories,
    isLoading: state => state.loading,
    getError: state => state.error,
    pomodoroSessionCount: state => state.pomodoro.sessionCount,
    pomodoroInSession: state => state.pomodoro.inSession,
    pomodoroSessionTime: state => state.pomodoro.sessionTime
  }
});
