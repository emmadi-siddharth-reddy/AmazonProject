import { addtoCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
   

    it('adds an new product to the cart', () => {

        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();
        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
})