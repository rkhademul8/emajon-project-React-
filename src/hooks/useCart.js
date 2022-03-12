import { useEffect, useState } from "react"
import { cartStore } from "../utilities/Fakedb"


const useCart=products=>{
    const [cart, setCart]=useState([])

    useEffect(()=>{

        if(products.length){
            const savedCart=cartStore()
            const storedCart=[]
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key)
            
                if(addedProduct){
                    // set quentiry
                    const quentity=savedCart[key]
                    addedProduct.quentity=quentity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    },[products])
    return [cart,setCart]
}

export default useCart