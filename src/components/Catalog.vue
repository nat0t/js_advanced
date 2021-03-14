<template>
  <div>
    <CatalogItem :items="this.getData" />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    CatalogItem,
  },
  methods: {
    // ...mapMutations(["setData"]),
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  created() {
    this.requestData();
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>