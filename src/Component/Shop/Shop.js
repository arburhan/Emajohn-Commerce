import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import CartCount from '../CartCount/CartCount';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const existCart = cart.find(product => product.id === selectedProduct.id);
        if (!existCart) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            existCart.quantity = existCart.quantity + 1;
            newCart = [...rest, existCart];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addToCart} ></Product>)
                }
            </div>
            <div className="cart-container">
                <CartCount cart={cart}>
                    <Link to='/order'><button>Review Order <FontAwesomeIcon></FontAwesomeIcon></button></Link>
                </CartCount>
            </div>
        </div>
    );
};

export default Shop;