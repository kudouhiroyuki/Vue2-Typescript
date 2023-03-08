<template>
  <div class="cardType1">
    <h3 class="mainTitle">{{ mainTitle }}</h3>
    <span class="subTitle">{{ subTitle }}</span>
    <li v-for="item in menus" :key="item.menu_id">
      {{ item }}
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
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
    return this.$store.getters.topPageState.menus;
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
