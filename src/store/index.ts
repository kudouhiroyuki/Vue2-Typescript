import Vue from "vue";
import Vuex from "vuex";
import commonStore from "./common";
import topStore from "./top";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonStore,
    topStore,
  },
});
