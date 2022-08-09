
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
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

const test = async () => {
  const adiciona = document.querySelector('.items');
  const v = await fetchProducts('computador');
  const resultado = v.results;
  resultado.forEach((element) => {
    const resultadoDes = ({ sku: element.id, name: element.title, salePrice: element.price, image: element.thumbnail });
    const produtos = createProductItemElement(resultadoDes);
    adiciona.appendChild(produtos);
  });
};

window.onload = () => {
  test();

};



const teste2 =async (event)=>{
  const id = await getSkuFromProductItem(event.target.parentElement);  
  const resultado = await fetchItem(id)
  const resultadoDes = ({ sku: resultado.id, name: resultado.title, salePrice: resultado.price, image: resultado.thumbnail });
  const card =  createCartItemElement(resultadoDes)
  const pai = document.querySelector('.cart__items')
  pai.appendChild(card)
}

