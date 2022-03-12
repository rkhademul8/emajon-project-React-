import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props

 let quentity=0   
let total=0
    for (const product of cart) {  
        if(!product.quentity){
            product.quentity=1
        }
        total=(total+product.price)*product.quentity
        quentity=quentity+product.quentity
    }
    const shipping= total>0 ? 10:0
    const tax=(total+shipping)*0.10
    const grandTotal=total+shipping+tax
    return (
        <div>
            <h3>Total order:{quentity}</h3>
            <h4>Total:{total.toFixed(2)}</h4>
            <h4>Shipping:{shipping}</h4>
            <h4>Tax:{tax.toFixed(2)}</h4>
            <h4>Grand Total:{grandTotal.toFixed(2)}</h4>

            {/* children come here */}
            {props.children}
            
            
        </div>
    );
};

export default Cart;