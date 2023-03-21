<template>
  <div class="hairTop">
    <Header />
    <p>carouse</p>
    <SearchBox />
    <p>catalog</p>
    <p>menu</p>
    <MenuSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/organisms/Header.vue";
import SearchBox from "@/components/organisms/top/SearchBox.vue";
import MenuSection from "@/components/organisms/top/MenuSection.vue";
import { MenusGetRequestBaseDto } from "@/api/menus";

@Component({
  components: {
    Header,
    SearchBox,
    MenuSection,
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
    const params: MenusGetRequestBaseDto = { categoryId: 1 };
    this.$store.dispatch("topStore/getMenusApi", params);
  }
}
</script>
