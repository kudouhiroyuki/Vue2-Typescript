<template>
  <v-text-field
    @input="onChange"
    :value="value"
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
  public value!: string;

  @Prop({ default: "" })
  public name!: string;

  @Prop({ default: false })
  public disabled!: boolean;

  @Prop({ default: "" })
  public label!: string;

  @Prop({ default: "" })
  public classMethod!: string;

  @Emit("inputTextChange")
  public onChange(value: string): string {
    return value;
  }
}
</script>

<style lang="scss">
.v-input {
  &.base {
  }
}
</style>
