<template>
  <v-text-field
    v-model="text"
    :name="name"
    :disabled="disabled"
    :label="label"
    :class="classMethod"
  />
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class InputText extends Vue {
  @Prop({ default: "" })
  public modelValue!: string;

  @Prop({ default: "" })
  public name!: string;

  @Prop({ default: false })
  public disabled!: boolean;

  @Prop({ default: "" })
  public label!: string;

  @Prop({ default: "" })
  public classMethod!: string;

  public get text(): string {
    return this.modelValue;
  }

  @Emit("inputUpdate")
  public set text(value: string) {
    //
  }

  @Emit("bottonClick")
  public onClick() {
    //
  }
}
</script>

<style lang="scss">
.v-input {
  &.base {
  }
}
</style>
