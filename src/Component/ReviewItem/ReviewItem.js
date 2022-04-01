import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveProduct }) => {
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
                            name.length > 20 ? name.slice(0, 20) + '...' : name
                        }
                    </p>
                    <p>Price: ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delete-button">
                    <button onClick={() => { handleRemoveProduct(product) }}>
                        <FontAwesomeIcon className='delte-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;