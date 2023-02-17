<template>
  <v-btn>{{ text }}</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: "" })
  text!: string;
}
</script>

<style scoped></style>
