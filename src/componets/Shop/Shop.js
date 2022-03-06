import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    //  load data from public
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    //  product button handle

    const [cart,setCart]=useState([])
    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='product-page'>
           <div className="product">
               <h2>Product Details</h2>
               {
                  products.map(product=><Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  ></Product>) 
                  
               }
               
               </div>
           <div className="cart">
               <Cart cart={cart}></Cart>
               </div>
        </div>
    );
};

export default Shop;