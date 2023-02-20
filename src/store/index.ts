import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import TopPage from "./topPage";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: common,
    topPage: TopPage,
  },
});
