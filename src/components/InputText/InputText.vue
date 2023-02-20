<template>
  <v-text-field label="First name" />
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class InputText extends Vue {
  // @Prop({ default: false })
  // public disabled!: boolean;

  // @Prop({ default: "" })
  // public classMethod!: string;

  // @Prop({ default: "" })
  // public text!: string;

  @Emit("bottonClick")
  public onClick() {
    //
  }
}
</script>

<style lang="scss">
.v-btn {
  &.v-btn--has-bg {
    &.base {
      color: #fff;
      background-color: #0069d9;
    }
  }
}
</style>
