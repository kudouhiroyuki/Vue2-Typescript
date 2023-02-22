<template>
  <div class="cardType1">
    <li v-for="fruit in menus" :key="fruit">
      {{ fruit }}
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CardType1 extends Vue {
  get menus() {
    return this.$store.getters.topPageState.menus;
  }
}
</script>

<style lang="scss"></style>
