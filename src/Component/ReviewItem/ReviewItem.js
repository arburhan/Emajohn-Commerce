import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='order-product'>
            <div>
                <img height={91} width={91} src={img} alt="" />
            </div>
            <div className='parent-cart-info'>
                <div className="product-cart-info">
                    <p className='product-name' title={name}>
                        {
                            name.length > 20 ? name.slice(0, 20) : name + '...'
                        }
                    </p>
                    <p>Price: {price}</p>
                    <p>Shipping Charge: {shipping}</p>
                </div>
                <div className="delete-button">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;