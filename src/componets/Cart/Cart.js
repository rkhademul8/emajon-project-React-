import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const {cart}=props
let total=0
    for (const product of cart) {
        total=total+product.price
    }
    return (
        <div>
            <h1>Totsl:{total}</h1>
        </div>
    );
};

export default Cart;