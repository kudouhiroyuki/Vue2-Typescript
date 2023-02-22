import Vue from "vue";
import Vuex from "vuex";
import { Commit } from "vuex";
import { MenusApi } from "@/api/menus";

Vue.use(Vuex);

type TopPageState = {
  area: string;
  keyword: string;
  [key: string]: string;
};

const state: TopPageState = {
  area: "",
  keyword: "",
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
      const menusApi = new MenusApi();
      menusApi.get({ category_id: 1 }).then((res) => {
        console.log(res);
      });
    },
  },
};
