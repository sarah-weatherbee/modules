/*components*/
import cart from './cart.js'; 

/*helpers*/
import book from '../helpers/book.js';
import util from '../helpers/util.js'; 


const addToCartEvent = (e) => {
e.preventDefault();
const bookInfo = book.getBook();
cart.setCart(bookInfo);
cart.cartToDom();
};


const makeStore = () => {
const bookInfo = book.getBook();
let domString = '<h2>Our only book:</h2>';
domString += `<h3>${bookInfo.price}</h3>`;
domString += `<img class="book-cover" src=${bookInfo.image} alt="book cover">`;
domString += `<button id="cart-button" class= "btn btn-danger">Add to cart</button>`;
util.printToDom('store-container', domString);
document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};


export default { makeStore };