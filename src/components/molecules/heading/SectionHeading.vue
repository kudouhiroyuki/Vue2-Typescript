<template>
  <div class="sectionHeading">
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

<style lang="scss">
h1 {
  font-size: 64px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 32px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 18px;
}
</style>
