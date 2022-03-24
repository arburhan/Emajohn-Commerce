import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {name, img, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name' >{name}</p>
                <h5 className='product-price' >Price: {price}</h5>
                <p className='product-manufacture' ><small>Manufacture: {seller}</small></p>
                <p className='product-rating' ><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button className='button-cart'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;