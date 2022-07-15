const saveCartItems = (itens) => {
  // seu código aqui 
  window.localStorage.setItem('cartItems', itens);  
};
 
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
