<template>
  <div class="sectionHeading">
    <Heading
      :tag="'div'"
      :class="'h1'"
      :text="'Hair style'"
      :styleColor="'#ed7ea0'"
      :styleFontWeight="'lighter'"
      :styleTextAlign="'center'"
      :styleMarginBottom="'20px'"
    />
    <Heading
      :tag="'div'"
      :class="'h4'"
      :text="'ヘアスタイルから探す'"
      :styleColor="'#5f5f5f'"
      :styleFontWeight="'bold'"
      :styleTextAlign="'center'"
      :styleMarginBottom="'0'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import Heading from "@/components/atom/heading/Heading.vue";

@Component({
  components: {
    Heading,
  },
})
export default class SectionHeading extends Vue {
  @Prop({ default: "" })
  public tag!: string;

  @Prop({ default: "" })
  public text!: string;

  @Prop({ default: "" })
  public styleColor!: string;

  @Prop({ default: "" })
  public styleFontWeight!: string;

  @Prop({ default: "" })
  public styleTextAlign!: "left" | "right" | "center";
}
</script>

<style lang="scss"></style>
