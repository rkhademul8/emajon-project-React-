import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='product-page'>
           <div className="product">
               <h2>Product Details</h2>
               {
                  products.map(product=><Product
                  key={product.key}
                  product={product}
                  ></Product>) 
                  
               }
               
               </div>
           <div className="cart">
               <h3>Order Summery</h3>
               </div>
        </div>
    );
};

export default Shop;