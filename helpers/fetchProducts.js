  const fetchProducts = async (computador) => {
    const url = await `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
      return fetch(url).then((resposta) => resposta.json()).then((data) => data);
    };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }