<template>
  <div class="nailTop">
    <TheHeader />
    <h1>ネイル・まつげ</h1>
    <SearchBox />
    <CardBox1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import SearchBox from "./components/SearchBox.vue";
import CardBox1 from "./components/CardBox1.vue";
import { RequestUtils } from "@/utils/requestUtils";
import { MenusController, MenusGetRequestDto } from "@/api/menus";

@Component({
  components: {
    TheHeader,
    SearchBox,
    CardBox1,
  },
})
export default class NailTop extends Vue {
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
    const menusController = new MenusController();
    const params = RequestUtils.toSnakeCase({
      categoryId: 1,
    }) as MenusGetRequestDto;
    menusController.getMenus(params).then((res) => {
      this.$store.dispatch("topPageState", {
        menus: res,
      });
    });
  }
}
</script>
