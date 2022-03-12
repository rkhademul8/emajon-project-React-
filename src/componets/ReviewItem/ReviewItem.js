import React from 'react';

const ReviewItem = (props) => {
    const {key,name,price,quentity,img}=props.product
    const {handleRemove}=props
    
    return (
        <div className='product-info'>
        <div className="product-img">
           <img src={img} alt="" />
            </div>

         <div className="product-details">
              <h4>{name}</h4>
              <h5>{price}</h5>
              <p>Quentity:{quentity} </p>
              <button
              onClick={()=> handleRemove(key)}

              >Remove </button>
             </div>

          
      </div>
    );
};

export default ReviewItem;