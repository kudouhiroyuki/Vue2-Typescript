<template>
  <div class="cardType1">
    <Heading
      :tag="'h1'"
      :text="'Hair style'"
      :styleColor="'#ed7ea0'"
      :styleFontWeight="'lighter'"
      :styleTextAlign="'center'"
    />
    <Heading
      :tag="'h4'"
      :text="'ヘアスタイルから探す'"
      :styleColor="'#5f5f5f'"
      :styleFontWeight="'bold'"
      :styleTextAlign="'center'"
    />
    <li v-for="item in menus" :key="item.menuId">
      {{ item }}
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Heading from "@/components/atom/heading/Heading.vue";

@Component({
  components: {
    Heading,
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
