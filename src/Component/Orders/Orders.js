import React from 'react';
import CartCount from '../CartCount/CartCount';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div className='products-order-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <CartCount cart={cart} ></CartCount>
            </div>
        </div>
    );
};

export default Orders;