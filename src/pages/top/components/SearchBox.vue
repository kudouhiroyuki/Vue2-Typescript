<template>
  <div class="searchBox">
    <InputText
      @inputTextChange="onInputTextChange('keyword', $event)"
      :value="keyword"
      :name="'keyword'"
      :disabled="false"
      :label="'キーワードを入れてください'"
      :classMethod="'base'"
    />
    <Button
      @bottonClick="onButtonClick"
      :disabled="false"
      :text="'Button'"
      :classMethod="'base'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/button/Button.vue";
import InputText from "@/components/inputText/InputText.vue";

@Component({
  components: {
    Button,
    InputText,
  },
})
export default class SearchBox extends Vue {
  public get keyword() {
    return this.$store.getters.topPageState.keyword;
  }
  public onButtonClick() {
    alert("onButtonClick");
  }
  public onInputTextChange(key: string, value: string) {
    const newState: { [key: string]: string } = {};
    newState[key] = value;
    this.$store.dispatch("topPageState", newState);
  }
}
</script>

<style lang="scss"></style>
