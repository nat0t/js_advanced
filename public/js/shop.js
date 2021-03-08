(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{Z:()=>d});class e{constructor(){var t,e;e=[],(t="_items")in this?Object.defineProperty(this,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):this[t]=e}render(){this._items.forEach((t=>{t.render()}))}}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class i{constructor({name:t,price:e,img:i}){n(this,"_name",""),n(this,"_price",0),n(this,"_img",0),this._name=t,this._price=e,this._img=i}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class c{constructor(t,e){s(this,"_text",""),s(this,"_callback",null),s(this,"className",""),this._text=t,this._callback=e}onBtnClick(){const t=this._callback;"function"==typeof t&&t()}getTemplate(t){const e=document.createElement("button");return e.classList.add(t),e}render(t,e){if(t){const n=this.getTemplate(e);n.innerHTML=this._text,t.appendChild(n),n.addEventListener("click",(()=>{this.onBtnClick()}))}}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class a extends i{constructor(t,e,n=1){super(t),r(this,"_count",0),r(this,"_CartInstance",null),this._count=n,this._CartInstance=e,this._CartInstance._items.some((t=>t._name==this._name))||this.render()}render(){const t=document.querySelector(".cart-list");if(t){if(null===document.querySelector(".cart-topic")){const e=document.createElement("div");e.className="cart-topic",e.innerHTML='<div class="cart-topic-name">Название товара</div>\n                              <div class="cart-topic-price">Цена товара</div>\n                              <div class="cart-topic-count">Количество товара</div>',t.appendChild(e)}const e=document.createElement("div");e.className="cart-item",e.innerHTML=`<div class="cart-item-name">${this._name}</div>\n                              <div class="cart-item-price">${this._price}</div>\n                              <div class="cart-item-count">${this._count}</div>`,t.appendChild(e),new c("+",this._plus.bind(this)).render(e,"plus-btn"),new c("-",this._minus.bind(this)).render(e,"minus-btn"),new c("Удалить все",this._delAll.bind(this)).render(e,"del-btn")}}_plus(){this._count+=1,this._reloadCounter()}_minus(){this._count>0&&(this._count-=1),this._reloadCounter()}_delAll(){this._count=0,this._reloadCounter();const t=this._CartInstance._items.indexOf(this);this._CartInstance._items.splice(t,1),document.querySelector(".cart-list").innerHTML="",this._CartInstance.render(),this._CartInstance._calcTotal()}_reloadCounter(){this._CartInstance._calcTotal(),document.querySelectorAll(".cart-item-count").forEach((t=>{t.parentElement.firstChild.innerHTML==this._name&&(t.innerHTML=this._count)}))}}class o extends i{constructor(t,e){var n;super(t),(n="_CartInstance")in this?Object.defineProperty(this,n,{value:null,enumerable:!0,configurable:!0,writable:!0}):this[n]=null,this._CartInstance=e}addToCart(){this._CartInstance.add(this)}render(){const t=document.querySelector(".goods-list");if(t){const e=document.createElement("div");e.className="good-item";const n=document.createElement("img");n.src=this._img;const i=document.createElement("div");i.className="good-descr";const s=document.createElement("h3");s.innerHTML=this._name;const r=document.createElement("p");r.innerHTML=`${this._price} руб.`;const a=new c("Добавить в корзину",this.addToCart.bind(this));i.appendChild(s),i.appendChild(r),a.render(i,"buy-btn"),e.appendChild(n),e.appendChild(i),t.appendChild(e)}}}const l=new class extends e{constructor(...t){var e;super(...t),(e="total")in this?Object.defineProperty(this,e,{value:0,enumerable:!0,configurable:!0,writable:!0}):this[e]=0}add(t){const e=new a({name:t._name,price:t._price,img:t._img,count:t._count},d);this._items.some((t=>t._name==e._name))?this._items.find((t=>t._name==e._name))._plus():this._items.push(e),this._calcTotal()}_calcTotal(){this.total=0;for(let t of this._items)this.total+=+t._price*t._count;this._renderTotal()}_renderTotal(){if(null!==document.querySelector(".cart-total")&&document.querySelector(".cart-total").remove(),null!==document.querySelector(".cart-item")){const t=`<div class="cart-total"><div>ИТОГО</div><div>${this.total}</div></div>`;document.querySelector(".cart-list").lastChild.insertAdjacentHTML("afterEnd",t)}}},d=l;new class extends e{constructor(t){super(),this.fetchGoods()}fetchGoods(){fetch("http://localhost:3000/database/items.json").then((t=>t.json())).then((t=>{let e=t.data.map((t=>new o(t,d)));this._items=e,this.render()}))}}(l)})();