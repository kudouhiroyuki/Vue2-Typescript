import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type InitialState = {
  keyword: string;
};

const initialState: InitialState = {
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
    // setCount(state: any, newCount: any) {
    //   state.count = newCount;
    // },
  },
  actions: {
    // setCountAction({ commit: any }, newCount: any) {
    //   commit("setCount", newCount);
    // },
  },
};
