import Vue from "vue";
import Vuex, { Commit } from "vuex";
import { MenusGetResponseResultDto } from "@/api/menus";

Vue.use(Vuex);

type TopPageState = {
  area: string;
  keyword: string;
  menus: MenusGetResponseResultDto[];
  [key: string]: string | MenusGetResponseResultDto[];
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
