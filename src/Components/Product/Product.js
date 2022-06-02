import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product , handleAddtoCart}) => {
   const {name,img,price,ratings,seller} = product;
    return (
        <div className='Product'>
           <img src={img} alt="" />
           <div className="product-info">
               <p className='product-name'>{name}</p>
               <p>Price: {price} $</p>
               <p><small>Manufacturer : {seller}</small></p>
               <small>Rating : {ratings}</small>
           </div>
           <button onClick={() => handleAddtoCart(product)} className='btn-cart'>
           <p className='btn-text'>Add to Cart  <FontAwesomeIcon className='btn-icon' icon={faShoppingCart}></FontAwesomeIcon></p>
          
           </button>
        </div>
    );
};

export default Product;