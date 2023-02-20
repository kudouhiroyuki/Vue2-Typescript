import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type State = {
  inputText1: string;
  inputText2: string;
};

const initData: State = {
  inputText1: "test1",
  inputText2: "test2",
};

export default {
  state: initData,
  getters: {
    getState: (state: State) => {
      return state;
    },
  },
  mutations: {
    setCount(state: any, newCount: any) {
      state.count = newCount;
    },
  },
  actions: {
    // setCountAction({ commit: any }, newCount: any) {
    //   commit("setCount", newCount);
    // },
  },
};
