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

export const UPDATE_MENUS = "UPDATE_MENUS";

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
    [UPDATE_MENUS](state: TopState, newState: MenusGetResponseResultDto[]) {
      state.menus = newState;
    },
  },
  actions: {
    getMenusApi(
      { commit }: { commit: Commit },
      params: MenusGetRequestBaseDto
    ) {
      const menusApi = new MenusApi();
      menusApi.getMenus(params).then((res) => {
        commit(UPDATE_MENUS, res);
      });
    },
  },
};
