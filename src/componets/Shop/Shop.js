import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addTodb, cartStore } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    //  load data from products.JSON
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProduct(data)
        })
    },[])


// store data in cart from localstorage

useEffect(()=>{
    const getCart=cartStore()
    const storeProduct=[]
    for (const key in getCart){
        const selectProduct=products.find(product=>product.key===key)
       if(selectProduct){
           const quentity=getCart[key]
           selectProduct.quentity=quentity
           storeProduct.push(selectProduct)
       }   
    }

    setCart(storeProduct)
},[products])


    //  product button handle
    const [cart,setCart]=useState([])

    const handleAddToCart=(product)=>{
        // console.log(product);
        const exixts=cart.find(pd=>pd.key===product.key)
        let newCart=[]
        if(exixts){
            const rest=cart.filter(pd=>pd.key !== product.key)
            exixts.quentity=exixts.quentity+1
            newCart=[...rest,product]
        }
        else{
            product.quentity=1
            newCart=[...cart,product]
        }
        
        setCart(newCart)
        // product add in localstorage
        addTodb(product.key)
    }


    // search handle
    const [displayProduct, setDisplayProduct]=useState([])
    const handleSearch=event=>{
        // console.log(event.target.value);
        const searchText=event.target.value
        const matchedProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProduct.length);
        setDisplayProduct(matchedProduct)

    }
    return (
     <>

        <div className="search-section">
            
            <input type="text"
            placeholder='search your product'
            onChange={handleSearch}
            />
            </div>

        <div className='product-page'>
           <div className="product">
               <h2>Product Details</h2>
               {
                  displayProduct.map(product=><Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  ></Product>) 
                  
               }
               
               </div>
           <div className="cart">
               <Cart cart={cart}>
                   <Link className='order-btn' to={'/review'}>Place Order</Link>
               </Cart>
               </div>
        </div>
     </>
    );
};

export default Shop;