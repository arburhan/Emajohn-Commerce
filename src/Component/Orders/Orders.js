import React from 'react';
import useProducts from '../Hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is orders section</h2>
            <h3>Total produts: {products.length}</h3>

        </div>
    );
};

export default Orders;