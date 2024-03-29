import { useEffect, useState } from "react"

const UseProducts=()=>{

const [products, setProducts] = useState([]);

useEffect(()=>{

    fetch('./products.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[])

// return necessary things
return [products]

}

export default UseProducts