import Vue from "vue";
import Vuex, { Commit } from "vuex";
import { MenusGetResponseResultDto } from "@/api/menus";

Vue.use(Vuex);

type TopState = {
  area: string;
  keyword: string;
  menus: MenusGetResponseResultDto[];
  [key: string]: string | MenusGetResponseResultDto[];
};

const state: TopState = {
  area: "",
  keyword: "",
  menus: [],
};

export default {
  state,
  getters: {
    topState: (state: TopState) => {
      return state;
    },
  },
  mutations: {
    topState(state: TopState, newState: TopState) {
      for (const [key, value] of Object.entries(newState)) {
        state[key] = value;
      }
    },
  },
  actions: {
    topState({ commit }: { commit: Commit }, newState: TopState) {
      commit("topState", newState);
    },
  },
};
