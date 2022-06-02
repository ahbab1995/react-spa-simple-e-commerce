import React from 'react';
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
           <button onClick={() => handleAddtoCart(product)} className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Product;