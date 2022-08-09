const fetchItem = async (item) => {
    const url = await `https://api.mercadolibre.com/items/${item}`;
      return await fetch(url).then((resposta) => resposta.json()).then((data) => data);
    };
  

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
