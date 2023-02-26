<template>
  <div class="hairTop">
    <TheHeader />
    <h1>ヘアサロン・メイク</h1>
    <SearchBox />
    <CardBox1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import SearchBox from "./components/SearchBox.vue";
import CardBox1 from "./components/CardBox1.vue";
import { MenusApi, MenusGetRequestBaseDto } from "@/api/menus";

@Component({
  components: {
    TheHeader,
    SearchBox,
    CardBox1,
  },
})
export default class hairTop extends Vue {
  created() {
    this.getMenusApi();
    this.$store.dispatch("commonState", { currentNav: "hair" });
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
    const params: MenusGetRequestBaseDto = { categoryId: 1 };
    menusApi.getMenus(params).then((res) => {
      this.$store.dispatch("topPageState", {
        menus: res,
      });
    });
  }
}
</script>
