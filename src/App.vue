<template>
  <div>
    <h1>Тачка на прокачку</h1>
    <Catalog />
    <AddForm />
    <h1>Корзина товаров</h1>
    <Cart />
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";
import Cart from "./components/Cart.vue";
import AddForm from "./components/AddForm.vue";

export default {
  components: {
    Catalog,
    Cart,
    AddForm,
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-family: "Open Sans";
  color: rgb(110, 106, 165);
}
</style>