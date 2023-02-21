<template>
  <div class="nailTop">
    <TheHeader />
    <h1>ネイル・まつげ</h1>
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
export default class NailTop extends Vue {
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
