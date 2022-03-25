import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, addToCart}) => {
    const {name, img, price, ratings, seller} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name' >{name}</p>
                <h5 className='product-price' >Price: {price}</h5>
                <p className='product-manufacture' ><small>Manufacture: {seller}</small></p>
                <p className='product-rating' ><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={()=>{addToCart(product)}} className='button-cart '><p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p></button>
        </div>
    );
};

export default Product;