import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import CartCount from '../CartCount/CartCount';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = product => {
        // jare click korechi seta bade sob gulare select korechi ete delete item bade kore baki gula oi array er moddhe chole jabe 
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        // remove from local storage
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-order-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <CartCount cart={cart} >
                    <button onClick={() => navigate('/shipment')}>Procced Order</button>
                </CartCount>
            </div>
        </div>
    );
};

export default Orders;