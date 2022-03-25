import React, { useEffect, useState } from 'react';
import CartCount from '../CartCount/CartCount';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    const addToCart=(product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product product={product} key={product.id} addToCart={addToCart} ></Product>)
                }
                <h2>Total Products: {products.length}</h2>

            </div>
            <div className="cart-container">
                <CartCount cart={cart}></CartCount>
            </div>
        </div>
    );
};

export default Shop;