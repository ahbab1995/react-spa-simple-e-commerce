import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);
    useEffect( () => {
        fetch('products.json')
         .then(res => res.json() )
         .then(data => setProduct(data))
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
           const addProduct = products.find(product => product.id === id);
           console.log(addProduct)
        }
    },[])

    const [cart, setCart] = useState([])

    const handleAddtoCart = (product) => {
       const newCart = [...cart,product];
       setCart(newCart);
       addToDb(product.id);
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