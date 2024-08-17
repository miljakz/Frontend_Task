import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    tasks: [],
    categories: [],
    loading: false,
    error: null,
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
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
    removeCategory(state, category) {
      state.categories = state.categories.filter(cat => cat !== category);
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      commit('setLoading', true);
      commit('clearError');
      try {
        const response = await axios.get('/api/tasks');
        commit('setTasks', response.data);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to fetch tasks');
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchCategories({ commit }) {
      commit('setLoading', true);
      commit('clearError');
      try {
        const response = await axios.get('/api/categories');
        commit('setCategories', response.data);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to fetch categories');
      } finally {
        commit('setLoading', false);
      }
    },
    async addTask({ commit }, task) {
      commit('setLoading', true);
      commit('clearError');
      try {
        const response = await axios.post('/api/tasks', task);
        commit('addTask', response.data);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to add task');
      } finally {
        commit('setLoading', false);
      }
    },
    async removeTask({ commit }, taskId) {
      commit('setLoading', true);
      commit('clearError');
      try {
        await axios.delete(`/api/tasks/${taskId}`);
        commit('removeTask', taskId);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to remove task');
      } finally {
        commit('setLoading', false);
      }
    },
    async addCategory({ commit }, category) {
      commit('setLoading', true);
      commit('clearError');
      try {
        const response = await axios.post('/api/categories', category);
        commit('addCategory', response.data);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to add category');
      } finally {
        commit('setLoading', false);
      }
    },
    async removeCategory({ commit }, category) {
      commit('setLoading', true);
      commit('clearError');
      try {
        await axios.delete(`/api/categories/${category}`);
        commit('removeCategory', category);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Failed to remove category');
      } finally {
        commit('setLoading', false);
      }
    },
    async login({ commit }, { email, password }) {
      commit('setLoading', true);
      commit('clearError');
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    logout({ commit }) {
      const auth = getAuth();
      auth.signOut();
      commit('setUser', null);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
    getTasks(state) {
      return state.tasks;
    },
    getCategories(state) {
      return state.categories;
    },
    isLoading(state) {
      return state.loading;
    },
    getError(state) {
      return state.error;
    }
  },
});
