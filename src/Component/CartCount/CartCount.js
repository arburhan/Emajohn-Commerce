import React from 'react';

const CartCount = ({cart}) => {
    console.log(cart)
    return (
        <div>
            <h2>Order Summary</h2>
                <div>
                    <p>Selected items: {cart.length}</p>
                    <p>Total price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h3>Grand Total: </h3>
                </div>
        </div>
    );
};

export default CartCount;