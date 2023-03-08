import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import top from "./top";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: common,
    top: top,
  },
});
