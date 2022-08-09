require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('1 - Teste a função fetchProducts', () => {
  test('Testar se fetchProducts é uma função',() => {
    expect(typeof(fetchItem)).toBe('function')
  })
  test('2-AO chamar',async()=>{
    await fetchItem('MLB1615760527');
      expect(fetch).toBeCalled();
  });
  test('3',async ()=>{
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
test('4',async ()=> {
  await fetchItem('MLB1615760527')
  expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
})
    
  test('Ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"',async()=>{
    try{
      await fetchItem()
    }catch(error){
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});
