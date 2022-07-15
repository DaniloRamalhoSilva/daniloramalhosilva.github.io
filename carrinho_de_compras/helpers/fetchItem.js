const getDetalheProductsUrl = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;

const fetchItem = async (product) => {
  try {
    const url = getDetalheProductsUrl(product);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
