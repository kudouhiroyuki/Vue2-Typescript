import Vue from "vue";
import Vuex from "vuex";
import { Commit } from "vuex";

Vue.use(Vuex);

type CommonState = {
  currentNav: string;
  [key: string]: string;
};

const state: CommonState = {
  currentNav: "",
};

export default {
  state,
  getters: {
    commonState: (state: CommonState) => {
      return state;
    },
  },
  mutations: {
    commonState(state: CommonState, newState: CommonState) {
      for (const [key, value] of Object.entries(newState)) {
        state[key] = value;
      }
    },
  },
  actions: {
    commonState({ commit }: { commit: Commit }, newState: CommonState) {
      commit("commonState", newState);
    },
  },
};
