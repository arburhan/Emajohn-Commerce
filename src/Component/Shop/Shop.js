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
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);

            })
    })

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const existCart = cart.find(product => product._id === selectedProduct._id);
        if (!existCart) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            existCart.quantity = existCart.quantity + 1;
            newCart = [...rest, existCart];
        }
        setCart(newCart);
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product._id} addToCart={addToCart} ></Product>)
                }
                <div className='page-number'>
                    {
                        [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''}
                            onClick={() => { setPage(number) }}
                        >{number + 1}</button>)
                    }
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

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