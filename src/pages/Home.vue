<template>
  <div class="home">
    <h1>home</h1>
    <Button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/Button/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>
