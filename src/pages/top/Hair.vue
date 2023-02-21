<template>
  <div class="hairTop">
    <TheHeader />
    <h1>ヘアサロン・メイク</h1>
    <SearchBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/TheHeader.vue";
import SearchBox from "./components/SearchBox.vue";

@Component({
  components: {
    TheHeader,
    SearchBox,
  },
})
export default class hairTop extends Vue {
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
}
</script>
