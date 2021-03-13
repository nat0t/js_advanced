<template>
  <div class="cart-list">
    <div class="cart-topic">
      <div class="cart-topic-name">Название товара</div>
      <div class="cart-topic-price">Цена товара</div>
      <div class="cart-topic-count">Количество товара</div>
    </div>
    <div class="cart-item" v-for="item in items">
      <div class="cart-item-name">{{ item.name }}</div>
      <div class="cart-item-price">{{ item.price }} руб.</div>
      <div class="cart-item-count">{{ item.count }}</div>
    </div>
    <div class="cart-total">
      <div>Итого</div>
      <div>1435000 руб.</div>
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
.cart-list {
  text-align: left;
  font-family: "Rock Salt", cursive;
  font-size: 20px;
}

.cart-topic {
  display: grid;
  grid-template-columns: 3fr 3fr 5fr;
  border: 3px solid black;
  background-color: blanchedalmond;
  padding: 10px;
  font-weight: bold;
}

.cart-item {
  display: grid;
  grid-template: "name price count minus plus" "name price count del del" / 3fr 3fr 3fr 1fr 1fr;
  border: 3px solid black;
  background-color: #81d7f1;
}

.cart-item-name {
  grid-area: name;
  padding: 17px 10px 0px 10px;
}

.cart-item-price {
  grid-area: price;
  padding: 17px 10px 0px 0px;
}

.cart-item-count {
  grid-area: count;
  padding: 17px 10px 0px 0px;
}

.minus-btn {
  grid-area: minus;
  justify-self: end;
}

.plus-btn {
  grid-area: plus;
  justify-self: start;
}

.minus-btn,
.plus-btn,
.del-btn {
  height: 25px;
  width: 65px;
  background-color: #008cba;
  color: white;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}

.del-btn {
  grid-area: del;
  width: 130px;
  justify-self: center;
}

.minus-btn:hover,
.plus-btn:hover,
.del-btn:hover {
  background-color: white;
  color: blue;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.cart-total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 3px solid black;
  background-color: blanchedalmond;
  text-align: right;
}
</style>