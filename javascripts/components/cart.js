import util from '../helpers/util.js';

const cart = [];

const getCart = () => {
    return cart;
};

const setCart = (book) => {
    cart.push(book);
};

const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    const total = myCart.reduce((a, b) => {return a + b.price}, 0);

    /*reduceallows you to define what starting things is, loops over array, 
    applies code you tell it to that array, in this case
    it takes an array of something and returns a single value. reduce takes a 
    function. a is prev returned num (in this situation, 
        it is 0), b is which item in foreach loop im on (will be an object)*/
    window.alert(`You owe ${total.toFixed(2)}`); /* toFixed(2) forces two dec points and then rounds to 2 dec points */
};

const cartToDom = () => {
const myCart = getCart();
let domString = '<div class="row">';
  domString += '<h2>Cart:</h2>';
  domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
  domString += '</div><div class="row d-flex flex-wrap">';
  myCart.forEach((book) => {
    domString += `<div class="card col-4">`;
    domString += `  <img src=${book.image} class="card-img-top" alt="book cover">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${book.title}</h5>`;
    domString += `    <p class="card-text">${book.price}</p>`;
    domString += `  </div>`;
    domString += `</div>`;
  });
  domString += `</div>`;

  util.printToDom('cart-container', domString);
  document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};


export default { setCart, cartToDom };