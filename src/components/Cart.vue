<template>
  <div class="cart-list">
    <div class="cart-topic">
      <div class="cart-topic-name">Название товара</div>
      <div class="cart-topic-price">Цена товара</div>
      <div class="cart-topic-count">Количество товара</div>
    </div>
    <CartItem v-for="id in getItemsOnPage" :id="id" :key="id" />
    <div class="cart-total">
      <div>Итого</div>
      <div>{{ getFullPrice }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["getItemsOnPage", "getFullPrice"]),
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>