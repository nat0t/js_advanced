<template>
  <div>
    <CatalogItem :items="items" />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";

export default {
  components: {
    CatalogItem,
  },
  data() {
    return {
      items: [
        {
          name: "KIA RIO X-LINE, 2017",
          price: 980000,
          img: "img/kia_rio.jpg",
        },
        {
          name: "KIA MAGENTIS, 2009",
          price: 480000,
          img: "img/kia_magentis.jpg",
        },
        {
          name: "DODGE CALIBER, 2008",
          price: 495000,
          img: "img/dodge_caliber.jpg",
        },
        {
          name: "CADILLAC SRX, 2014",
          price: 1450000,
          img: "img/cadillac_srx.jpg",
        },
        {
          name: "CHEVROLET CRUZE, 2011",
          price: 455000,
          img: "img/chevrolet_cruze.jpg",
        },
        {
          name: "VOLKSWAGEN TIGUAN, 2009",
          price: 725000,
          img: "img/volkswagen_tiguan.jpg",
        },
        {
          name: "NISSAN QASHQAI, 2011",
          price: 770000,
          img: "img/nissan_qashqai.jpg",
        },
        {
          name: "CHEVROLET CAPTIVA, 2011",
          price: 770000,
          img: "img/chevrolet_captiva.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>