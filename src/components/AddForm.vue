<template>
  <div>
    <input type="text" placeholder="name" v-model="name" /><br />
    <input type="text" placeholder="price" v-model="price" /><br />
    <Button @clicked="addGood">Добавить товар</Button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["addItemList"]),
    addGood() {
      const goodToAdd = { name: this.name, price: this.price, img: "" };
      this.addItemList(goodToAdd);
    },
  },
};
</script>

<style>
</style>