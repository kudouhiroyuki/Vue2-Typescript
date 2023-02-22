<template>
  <div class="nailTop">
    <TheHeader />
    <h1>ネイル・まつげ</h1>
    <SearchBox />
    <CardType1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import SearchBox from "./components/SearchBox.vue";
import CardType1 from "./components/CardType1.vue";
import { MenusApi } from "@/api/menus";

@Component({
  components: {
    TheHeader,
    SearchBox,
    CardType1,
  },
})
export default class NailTop extends Vue {
  get menus() {
    return this.$store.getters.topPageState.menus;
  }
  created() {
    this.getMenusApi();
    this.$store.dispatch("commonState", { currentNav: "nail" });
  }
  mounted() {
    // console.log("mounted");
  }
  updated() {
    // console.log("updated");
  }
  destroyed() {
    // console.log("destroyed");
  }

  public getMenusApi() {
    const menusApi = new MenusApi();
    menusApi.get({ category_id: 2 }).then((res) => {
      this.$store.dispatch("topPageState", {
        menus: res,
      });
    });
  }
}
</script>
