const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test("1",()=>{
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  })
});
test('2',()=>{
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toBeCalledWith('cartItems','<ol><li>Item</li></ol>')
})
