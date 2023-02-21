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
  created() {
    // console.log("created");
  }
  mounted() {
    // console.log("mounted");
  }
  updated() {
    console.log(this.$store.getters.commonState);
    console.log(this.$store.getters.topPageState);
  }
  destroyed() {
    // console.log("destroyed");
  }

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
