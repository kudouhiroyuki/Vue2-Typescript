import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type InitialState = {
  inputText1: string;
  inputText2: string;
};

const initialState: InitialState = {
  inputText1: "test1",
  inputText2: "test2",
};

export default {
  state: initialState,
  getters: {
    getState: (state: InitialState) => {
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
