import React from 'react';
import './CartCount.css';
const CartCount = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseInt((total * 0.1).toFixed(2));
    const grandTotal = total + tax + shipping;
    return (
        <div className='cart' >
            <h2>Order Summary</h2>
                <div>
                    <p>Selected items: {cart.length}</p>
                    <p>Total price: ${total}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <p className='grand-text'>Grand Total: ${grandTotal}</p>
                </div>
        </div>
    );
};

export default CartCount;