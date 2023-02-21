import Vue from "vue";
import Vuex from "vuex";
import { Commit } from "vuex";

Vue.use(Vuex);

type InitialState = {
  area: string;
  keyword: string;
  [key: string]: string;
};

const initialState: InitialState = {
  area: "",
  keyword: "",
};

export default {
  state: initialState,
  getters: {
    topPageState: (state: InitialState) => {
      return state;
    },
  },
  mutations: {
    topPageState(state: InitialState, newState: InitialState) {
      for (const [key, value] of Object.entries(newState)) {
        state[key] = value;
      }
    },
  },
  actions: {
    topPageState({ commit }: { commit: Commit }, newState: InitialState) {
      commit("topPageState", newState);
    },
  },
};
