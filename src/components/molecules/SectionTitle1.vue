<template>
  <div class="sectionTitle1">
    <div class="mainTitle">Hair style</div>
    <div class="subTitle">ヘアスタイルから探す</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop({ default: false })
  public disabled!: boolean;
  @Prop({ default: "" })
  public text!: string;
  @Prop({ default: "" })
  public classMethod!: string;
  @Emit("bottonClick")
  public onClick() {
    //
  }
}
</script>

<style scoped lang="scss">
.sectionTitle1 {
  .mainTitle {
    color: #ed7ea0;
    font-size: 64px;
    font-weight: lighter;
    margin: 0 0 20px;
    text-align: center;
  }
  .subTitle {
    color: #5f5f5f;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 120px;
    text-align: center;
  }
}
</style>
