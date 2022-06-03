import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
         total = total + product.price;
         shipping = shipping + product.shipping;
    }
    return (
        <div className='cart'>
             <h3>Order Summary </h3>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price: {total}</p>
             <p>Total Shipping Charge: {shipping}</p>
             <p>Tax: </p>
             <h5>Grand Total: $1559</h5>
        </div>
    );
};

export default Cart;