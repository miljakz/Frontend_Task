const state = {
  sessionsCompleted: 0
};

const mutations = {
  incrementSessions(state) {
    state.sessionsCompleted++;
  }
};

const actions = {
  completeSession({ commit }) {
    commit('incrementSessions');
  }
};

const getters = {
  totalSessions: state => state.sessionsCompleted
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
