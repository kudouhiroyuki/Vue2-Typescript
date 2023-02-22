import Vue from "vue";
import Vuex, { Commit } from "vuex";

Vue.use(Vuex);

type TopPageState = {
  area: string;
  keyword: string;
  menus: { [key: string]: string }[];
  [key: string]: string | { [key: string]: string }[];
};

const state: TopPageState = {
  area: "",
  keyword: "",
  menus: [],
};

export default {
  state,
  getters: {
    topPageState: (state: TopPageState) => {
      return state;
    },
  },
  mutations: {
    topPageState(state: TopPageState, newState: TopPageState) {
      for (const [key, value] of Object.entries(newState)) {
        state[key] = value;
      }
    },
  },
  actions: {
    topPageState({ commit }: { commit: Commit }, newState: TopPageState) {
      commit("topPageState", newState);
    },
  },
};
