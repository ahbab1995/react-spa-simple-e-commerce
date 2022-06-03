import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);
    useEffect( () => {
        fetch('products.json')
         .then(res => res.json() )
         .then(data => setProduct(data))
    },[])

    const [cart, setCart] = useState([])
    const handleAddtoCart = (product) => {
       const newCart = [...cart,product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;