const currentBasket = new Basket(Math.floor(Math.random() * 100));

// Создание блока товаров.
const productWrapper = document.createElement('div');
productWrapper.className = 'product-wrapper';
document.body.appendChild(productWrapper);
for (item of goods) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = '<img src="' + item.img + '">';
    productWrapper.appendChild(productItem);

    const productList = document.createElement('div');
    productList.className = 'product-list';
    productList.innerHTML = '<h3>' + item.name + '</h3>';
    productList.innerHTML += '<span class="price">' + item.price + '</span>';
    // productList.innerHTML += '<a href="" class="button">В корзину</a>';
    productItem.appendChild(productList);

    const button = document.createElement('div');
    button.className = 'button';
    button.id = item.id;
    button.href = '';
    button.innerHTML = 'В корзину';
    productList.appendChild(button);
}

// Создание блока корзины.
const basketTopic = document.createElement('h1');
basketTopic.innerHTML = 'Корзина товаров';
document.body.appendChild(basketTopic);

const basketList = document.createElement('table');
basketList.className = 'basket-list';
basketList.innerHTML = '<thead><tr><th>Название товара</th><th>Цена товара</th></tr></thead>';
document.body.appendChild(basketList);

// Обработка покупки.
productWrapper.addEventListener('click', ({ target }) => {
    if (target.className === 'button') {
        product = goods.find((p) => p.id === target.id);
        currentBasket.add(new Product(product.id, product.name, product.price));
        currentBasket.calcTotal();
        createBasketBlock(currentBasket);
    }
});

// Заполнение корзины.
function createBasketBlock(basket) {
    item = currentBasket.content[currentBasket.content.length - 1];
    const basketItem = document.createElement('tr');
    basketItem.className = 'product-item';
    basketItem.innerHTML = '<td>' + item.name + '</td>';
    basketItem.innerHTML += '<td>' + item.price + '</td>';
    if (document.getElementsByClassName('basket-total')[0]) {
        document.getElementsByClassName('basket-total')[0].replaceWith(basketItem);
    }
    else {
        basketList.appendChild(basketItem);
    }
    const basketTotal = document.createElement('tfoot');
    basketTotal.className = 'basket-total';
    basketTotal.innerHTML = '<tr><td>ИТОГО</td><td>' + currentBasket.total + '</td></tr>';
    basketList.appendChild(basketTotal);
}