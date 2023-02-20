<template>
  <div class="topPage">
    <TheHeader />
    <h1>home</h1>
    <Button
      @bottonClick="onButtonClick"
      :disabled="false"
      :text="'Button'"
      :classMethod="'base'"
    />
    <InputText
      @inputUpdate="onInputUpdate('keyword', $event)"
      :value="keyword"
      :name="'keyword'"
      :disabled="false"
      :label="'キーワードを入れてください'"
      :classMethod="'base'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import Button from "@/components/Button/Button.vue";
import InputText from "@/components/InputText/InputText.vue";

@Component({
  components: {
    TheHeader,
    Button,
    InputText,
  },
})
export default class TopPage extends Vue {
  public keyword = this.$store.getters.topPageState.keyword;

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
  public onInputUpdate(key: string, value: string) {
    key = value;
  }
}
</script>
