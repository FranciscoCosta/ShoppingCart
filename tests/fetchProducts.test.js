require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testar se fetchProducts é uma função',() => {
    expect(typeof(fetchProducts)).toBe('function')
  })
  test('2-AO chamar',async()=>{
    await fetchProducts('computador');
      expect(fetch).toBeCalled();
  });
  test('3',async ()=>{
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
test('4',async ()=> {
  await fetchProducts('computador')
  expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
})
    
  test('Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"',async()=>{
    try{
      await fetchProducts()
    }catch(error){
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});
