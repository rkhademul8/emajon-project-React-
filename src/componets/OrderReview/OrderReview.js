import React from 'react';
import useCart from '../../hooks/useCart';
import UseProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products]=UseProducts()
    const [cart,setCart]=useCart(products)

    const handleRemove=key=>{
        const newCart=cart.filter(product=>product.key !==key)
        setCart(newCart)
        removeFromDb(key)
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
            <Cart cart={cart}></Cart>
            </div>
       
       
        </div>
    );
};

export default OrderReview;