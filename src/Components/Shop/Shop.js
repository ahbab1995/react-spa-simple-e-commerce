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
        const savedCart = [];
        for (const id in storedCart) {
           const addProduct = products.find(product => product.id === id);
           if(addProduct){
               const quantity = storedCart[id];
               addProduct.quantity = quantity;
              savedCart.push(addProduct);
           }
        }
        setCart(savedCart)
        
    },[products])

    const [cart, setCart] = useState([])
    let newCart = [];
    const handleAddtoCart = (selectProduct) => {
        const exists = cart.find(product => product.id === selectProduct);
        if (!exists) {
            selectProduct.quantity = 1;
             newCart = [...cart,selectProduct];
        }else {
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart=[...rest,exists]
        }
      
       setCart(newCart);
       addToDb(selectProduct.id);
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