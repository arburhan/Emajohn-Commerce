import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const adedProduct = products.find(product=>product.id===id);
            if(adedProduct){
                const quantity = storedCart[id];
                adedProduct.quantity = quantity;
                savedCart.push(adedProduct);
            console.log(adedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const addToCart=(selectedProduct)=>{
        let newCart = [];
        const existCart = cart.find(product=>product.id === selectedProduct.id);
        if(!existCart){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id!==selectedProduct.id);
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
                    products.map(product=><Product product={product} key={product.id} addToCart={addToCart} ></Product>)
                }
            </div>
            <div className="cart-container">
                <CartCount cart={cart}></CartCount>
            </div>
        </div>
    );
};

export default Shop;