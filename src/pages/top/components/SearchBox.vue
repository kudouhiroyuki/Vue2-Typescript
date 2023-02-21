<template>
  <div class="searchBox">
    <InputText
      @inputUpdate="onInputUpdate('keyword', $event)"
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
import Button from "@/components/Button/Button.vue";
import InputText from "@/components/InputText/InputText.vue";

@Component({
  components: {
    Button,
    InputText,
  },
})
export default class SearchBox extends Vue {
  get keyword() {
    return this.$store.getters.topPageState.keyword;
  }

  public onButtonClick() {
    alert("onButtonClick");
  }
  public onInputUpdate(key: string, value: string) {
    const newState: { [key: string]: string } = {};
    newState[key] = value;
    this.$store.dispatch("topPageState", newState);
  }
}
</script>

<style lang="scss"></style>
