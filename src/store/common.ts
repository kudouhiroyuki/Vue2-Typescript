import Vue from "vue";
import Vuex from "vuex";
import { Commit } from "vuex";

Vue.use(Vuex);

type InitialState = {
  currentNav: string;
  [key: string]: string;
};

const initialState: InitialState = {
  currentNav: "",
};

export default {
  state: initialState,
  getters: {
    commonState: (state: InitialState) => {
      return state;
    },
  },
  mutations: {
    commonState(state: InitialState, newState: InitialState) {
      for (const [key, value] of Object.entries(newState)) {
        state[key] = value;
      }
    },
  },
  actions: {
    commonState({ commit }: { commit: Commit }, newState: InitialState) {
      commit("commonState", newState);
    },
  },
};
