<template>
  <div class="home">
    <h1>home</h1>
    <Button
      @bottonClick="onButtonClick"
      :disabled="false"
      :text="'Button'"
      :classMethod="'base'"
    />
    <InputText
      @inputUpdate="onInputUpdate('inputText1', $event)"
      :value="inputText1"
      :name="'inputText1'"
      :disabled="false"
      :label="'InputText1'"
      :classMethod="'base'"
    />
    <InputText
      @inputUpdate="onInputUpdate('inputText2', $event)"
      :value="inputText2"
      :name="'inputText2'"
      :disabled="false"
      :label="'InputText2'"
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
export default class Home extends Vue {
  public inputText1 = "inputText1";
  public inputText2 = "inputText2";

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
    alert("onInputUpdate");
    key = value;
  }
}
</script>
