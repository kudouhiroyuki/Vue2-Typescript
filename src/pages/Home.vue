<template>
  <div class="home">
    <h1>home</h1>
    <Button
      @bottonClick="onButtonClick"
      :disabled="false"
      :classMethod="'base'"
      :text="'Button'"
    />
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
export default class Home extends Vue {
  created() {
    // console.log("created");
  }
  mounted() {
    // console.log("mounted");
  }
  updated() {
    // console.log("updated");
  }
  destroyed() {
    // console.log("destroyed");
  }
  public onButtonClick() {
    alert("onButtonClick");
  }
}
</script>
