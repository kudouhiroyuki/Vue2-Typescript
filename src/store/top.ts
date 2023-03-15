import Vue from "vue";
import Vuex, { Commit } from "vuex";
import {
  MenusApi,
  MenusGetRequestBaseDto,
  MenusGetResponseResultDto,
} from "@/api/menus";

Vue.use(Vuex);

export interface TopState {
  area: string;
  keyword: string;
  menus: MenusGetResponseResultDto[];
  [key: string]: string | MenusGetResponseResultDto[];
}

const state: TopState = {
  area: "",
  keyword: "",
  menus: [],
};

export default {
  namespaced: true,
  state,
  getters: {
    menus: (state: TopState) => state.menus,
  },
  mutations: {
    menusUpdate(state: TopState, newState: MenusGetResponseResultDto[]) {
      state.menus = newState;
    },
  },
  actions: {
    menusAction(
      { commit }: { commit: Commit },
      params: MenusGetRequestBaseDto
    ) {
      const menusApi = new MenusApi();
      menusApi.getMenus(params).then((res) => {
        commit("menusUpdate", res);
      });
    },
  },
};
