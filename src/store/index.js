import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rowData: null
  },
  getters: {
    rowData: state => {
      return state.rowData;
    }
  },
  mutations: {
    setRowData(state, data) {
      state.rowData = data;
    },
    addGhostUser(state, user) {
      state.rowData.unshift(user);
    },
    commitGhostUser(state, user) {
      let updatedRowData = state.rowData.map(row => ({
        ...row,
        ghost: row.id === user.id ? false : row.ghost
      }));
      state.rowData = updatedRowData;
    },
    deleteUser(state, { user, force = false }) {
      let confirm = true;
      if (!force) {
        confirm = window.confirm(
          `Are you sure you would like to remove ${user.username}?`
        );
      }
      if (confirm) {
        let updatedRowData = this.state.rowData.filter(
          row => row.id !== user.id
        );
        state.rowData = updatedRowData;
      }
    }
  },
  actions: {},
  modules: {}
});
