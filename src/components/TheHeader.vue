<template>
  <header class="header">
    <nav>
      <router-link :class="{ current: currentNav === 'hair' }" to="/">
        ヘアサロン・メイク
      </router-link>
      <router-link :class="{ current: currentNav === 'nail' }" to="/nail">
        ネイル・まつげ
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {
  public get currentNav() {
    return this.$store.getters.commonState.currentNav;
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;
  background-color: #efefef;
  .current {
    background-color: #ed7ea0;
  }
}
</style>
