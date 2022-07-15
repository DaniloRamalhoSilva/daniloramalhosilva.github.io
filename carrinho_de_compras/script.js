const createProductImageElement = (imageSource, className) => {
  const img = document.createElement('img');
  img.className = className;
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const atualizaStorege = () => {
  const olElement = document.getElementsByClassName('cart__items')[0];
  saveCartItems(olElement.innerHTML);
};

const totalPrice = () => {
  const totalElement = document.getElementsByClassName('total-price')[0];
  const olElement = document.getElementsByClassName('cart__items')[0];
  let total = 0;
  Array.prototype.forEach.call(olElement.children, (child) => {
    const valor = child.children[1].children[2].innerText.split('R$');
    console.log(parseFloat(valor[1].replace(".", "").replace(",", ".")));
    total += parseFloat(valor[1].replace(".", "").replace(",", "."));
  });
  totalElement.innerText = `Subtotal: ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
};

const cartItemClickListener = (event) => {
  elementCarrinho = event.target;
  elementCarrinho.parentNode.parentNode.remove();
  atualizaStorege();
  totalPrice();
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const li = document.createElement('li');
  const div1 =  document.createElement('div');
  const div2 =  document.createElement('div');
  const div3 =  document.createElement('div');
  li.className = 'cart__item';

  const excluirItem = createCustomElement('span', 'cart__close', 'x');
  excluirItem.addEventListener('click', cartItemClickListener);
  
  div3.appendChild(excluirItem);
  div2.appendChild(createProductImageElement(image, 'cart__image'));
  div1.appendChild(createCustomElement('span', 'cart__sku', sku));  
  div1.appendChild(createCustomElement('span', 'cart__title', name));
    div1.appendChild(createCustomElement('span', 'cart__price', salePrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })))
  
  li.appendChild(div2);
  li.appendChild(div1);
  li.appendChild(div3)
  
  return li;
};

const addCarrinho = async (event) => {
  const elementID = event.target.parentNode;
  const id = getSkuFromProductItem(elementID);
  const data = await fetchItem(id);
  const obj = {
    salePrice: data.price,
    sku: data.id,
    name: data.title,
    image: data.thumbnail,
  };  
  const olElement = document.getElementsByClassName('cart__items')[0];
  olElement.appendChild(createCartItemElement(obj));
  atualizaStorege();
  totalPrice();
};

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image, 'item__image'));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })))
  const e = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  e.addEventListener('click', addCarrinho);
  section.appendChild(e);
  return section;
};

const showLoad = () => {
  const containerElement = document.getElementsByClassName('container')[0];
  containerElement.appendChild(createCustomElement('p', 'loading', 'carregando...'));
};

const closeLoad = () => {
  const loadingElement = document.getElementsByClassName('loading')[0];
  loadingElement.remove();
};

const creatList = async (produto) => {
  showLoad();
  const sectioElement = document.getElementsByClassName('items')[0];
  const data = await fetchProducts(produto);
  const listProduts = Object.entries(data.results);
  listProduts.forEach(([index, obj]) => {
    const prod = {
      sku: obj.id,
      name: obj.title,
      image: obj.thumbnail,
      price: obj.price,
    };
    sectioElement.appendChild(createProductItemElement(prod));
  });
  closeLoad();
};

const loadCar = () => {
  const olElement = document.getElementsByClassName('cart__items')[0];
  olElement.innerHTML = getSavedCartItems();
  Array.prototype.forEach.call(olElement.children, (child) => {
    child.addEventListener('click', cartItemClickListener);
  });
  totalPrice();
};

const clearCar = () => {
  const btnClearCarElement = document.getElementsByClassName('empty-cart')[0];
  btnClearCarElement.addEventListener('click', () => {
    const olElement = document.getElementsByClassName('cart__items')[0];
    const totalElement = document.getElementsByClassName('total-price')[0];
    olElement.innerHTML = '';
    totalElement.innerText = 'Subtotal: R$: 0,00';
    atualizaStorege();
  });
};

const clearProd = () => {
  const elementItens = document.getElementsByClassName('items')[0]
  elementItens.innerHTML = '';
}

const pesquisaProd = () => {
  clearProd();
  const elementPesquisa = document.getElementById('pesquisa');
  console.log(elementPesquisa.value);
  
  creatList(elementPesquisa.value);
}

const addEvent = () => {
  const elementPesquisa = document.getElementById('pesquisa');
  const elementBtnPesquisa = document.getElementsByClassName('fa-solid')[0];

  elementBtnPesquisa.addEventListener('click', pesquisaProd);
  elementPesquisa.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      pesquisaProd();
    }
  })
};

window.onload = () => {
  creatList('compultador');
  loadCar();
  clearCar();
  addEvent();
};
