const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
let total = 0;

const pai = document.querySelector('.cart__items');
const areaTotal = document.querySelector('.cart');
const valor = document.createElement('p');
valor.className = 'total-price';
valor.innerText = total;
areaTotal.appendChild(valor);

function atualizaTotal(variavel) {
  total += variavel;
  valor.innerHTML = total;
}

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const teste2 = async (event) => {
  const id = await getSkuFromProductItem(event.target.parentElement);  
  const resultado = await fetchItem(id);
  const resultadoDes = ({ sku: resultado.id, name: resultado.title, salePrice: resultado.price });
  const card = createCartItemElement(resultadoDes);
  dadosCarinho.push(resultadoDes);
  saveCartItems('card', dadosCarinho); 

  pai.appendChild(card);
    atualizaTotal(resultado.price);
};
const renderizaCarinho = async () => {
  dadosCarinho.forEach((element) => {
    const card = createCartItemElement(element);
    pai.appendChild(card);
  });
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const botaoextra = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  botaoextra.addEventListener('click', teste2);
  section.appendChild(botaoextra);

  return section;
};
const test = async () => {
  const adiciona = document.querySelector('.items');
  const v = await fetchProducts('computador');
  const resultado = v.results;
  resultado.forEach((element) => {
    const resultadoDes = ({ sku: element.id, name: element.title, image: element.thumbnail });
    const produtos = createProductItemElement(resultadoDes);
    adiciona.appendChild(produtos);
  });
};

window.onload = async () => {
  test();
  dadosCarinho = getSavedCartItems('card') || [];
  renderizaCarinho();
};

function apagaTudo() {
  const area = document.querySelector('.cart__items');
  area.innerHTML = '';
  valor.innerText = 0;
  dadosCarinho = [];
  saveCartItems('card', dadosCarinho);
}

const botaoApaga = document.querySelector('.empty-cart');
botaoApaga.addEventListener('click', apagaTudo);