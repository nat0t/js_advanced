<template>
  <div class="goods-list">
    <div class="good-item" v-for="item in items">
      <img :src="item.img" />
      <div class="good-descr">
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }} руб.</p>
        <button class="buy-btn">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style>
.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

.good-item {
  font-size: 1vw;
  padding: 0.5em;
  text-align: center;
}

.good-item > img {
  height: 70%;
  width: 90%;
}

.good-descr {
  background: #fafafa;
  padding: 15px 0;
  text-align: center;
  margin: auto;
  width: 90%;
}

.buy-btn {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
  cursor: pointer;
}

.buy-btn:hover {
  background: #fc5a5a;
}
</style>