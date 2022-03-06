import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {img,name,price,seller,stock}=props.product
    return (
        <div className='product-info'>
          <div className="product-img">
             <img src={img} alt="" />
              </div>

           <div className="product-details">
                <h4>{name}</h4>
                <p>{seller}</p>
                <h5>{price}</h5>
                <p>only {stock} left in stock</p>
                <button
                onClick={()=>props.handleAddToCart(props.product)}
                >Add to cart</button>
               </div>

            
        </div>
    );
};

export default Product;