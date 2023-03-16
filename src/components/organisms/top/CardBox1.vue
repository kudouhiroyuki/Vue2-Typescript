<template>
  <div class="cardType1">
    <SectionTitle1 />
    <li v-for="item in menus" :key="item.menuId">
      {{ item }}
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SectionTitle1 from "@/components/molecules/SectionTitle1.vue";

@Component({
  components: {
    SectionTitle1,
  },
})
export default class CardType1 extends Vue {
  public mainTitle = "";
  public subTitle = "";
  public titleObj: { key: string; mainTitle: string; subTitle: string }[] = [
    {
      key: "hair",
      mainTitle: "Hair style",
      subTitle: "ヘアスタイルから探す",
    },
    {
      key: "nail",
      mainTitle: "Nail design",
      subTitle: "デザインから探す",
    },
  ];

  public get currentNav() {
    return this.$store.getters.commonState.currentNav;
  }
  public get menus() {
    return this.$store.getters["topStore/menus"];
  }

  created() {
    this.createTitle();
  }

  public createTitle() {
    const result = this.titleObj.filter((item) => item.key === this.currentNav);
    this.mainTitle = result[0].mainTitle;
    this.subTitle = result[0].subTitle;
  }
}
</script>

<style lang="scss"></style>
