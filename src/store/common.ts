import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type InitialState = {
  currentNav: string;
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
