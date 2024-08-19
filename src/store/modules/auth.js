// store/modules/auth.js

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const state = {
  user: null,
  error: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  async signUp({ commit }, { email, password }) {
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, email, password);
      commit('setUser', response.user);
    } catch (error) {
      commit('setError', error.message);
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);
      commit('setUser', response.user);
    } catch (error) {
      commit('setError', error.message);
    }
  },

  logout({ commit }) {
    const auth = getAuth();
    auth.signOut().then(() => {
      commit('setUser', null);
    });
  },
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
  authError: (state) => state.error,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
