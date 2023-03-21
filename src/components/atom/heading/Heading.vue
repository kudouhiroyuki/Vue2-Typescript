<template>
  <div
    :is="tag"
    :class="classMethod"
    :style="{
      color: styleColor,
      fontWeight: styleFontWeight,
      textAlign: styleTextAlign,
      marginBottom: styleMarginBottom,
    }"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
@Component
export default class Heading extends Vue {
  @Prop({ default: "" })
  public tag!: string;

  @Prop({ default: "" })
  public classMethod!: string;

  @Prop({ default: "" })
  public text!: string;

  @Prop({ default: "" })
  public styleColor!: string;

  @Prop({ default: "" })
  public styleFontWeight!: string;

  @Prop({ default: "" })
  public styleTextAlign!: "left" | "right" | "center";

  @Prop({ default: "" })
  public styleMarginBottom!: string;
}
</script>

<style lang="scss">
h1,
.h1 {
  font-size: 64px;
}
h2,
.h2 {
  font-size: 40px;
}
h3,
.h3 {
  font-size: 32px;
}
h4,
.h4 {
  font-size: 24px;
}
h5,
.h5 {
  font-size: 20px;
}
h6,
.h6 {
  font-size: 18px;
}
</style>
