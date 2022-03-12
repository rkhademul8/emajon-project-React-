import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import UseProducts from '../../hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products]=UseProducts()
    const [cart,setCart]=useCart(products)
    
    //  remove from cart
    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !==key)
        setCart(newCart)
        removeFromDb(key)
    }

    //  clear the cart
    const handlePlaceOrder=()=>{
        clearTheCart()
    }

    return (
        <div className='product-page'>
            <div className='product'>
            {
              cart.map(product=><ReviewItem 
                key={product.key}
                product={product}
                handleRemove={handleRemove}
                ></ReviewItem>)  
            }
            </div>

            <div className='cart'>

            <Cart cart={cart}>

                {/*  children send to cart */}
                <button className='order-btn' 
                onClick={handlePlaceOrder}> 
                <Link to={'/placeOrder'}>Order</Link>
                </button>

               
            </Cart>
            </div>
       
       
        </div>
    );
};

export default OrderReview;