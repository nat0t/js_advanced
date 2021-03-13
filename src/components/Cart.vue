<template>
  <div><CartItem :items="items" /></div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      items: [
        {
          name: "KIA RIO X-LINE, 2017",
          price: 980000,
          count: 1,
        },
        {
          name: "CHEVROLET CRUZE, 2011",
          price: 455000,
          count: 2,
        },
      ],
    };
  },
};
</script>

<style>
</style>