<template>
  <header class="header">
    <nav>
      <router-link to="/">ヘアサロン・メイク</router-link> |
      <router-link to="/nail">ネイル・まつげ</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {}
</script>

<style lang="scss">
.header {
}
</style>
