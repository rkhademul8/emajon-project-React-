

// product add in localstorage
const addTodb=id=>{
    const exists=localStorage.getItem('shopping_cart')
    let shopping_cart={}
    if(!exists){
        shopping_cart[id]=1
    }
    else{
        shopping_cart=JSON.parse(exists)
        if(shopping_cart[id]){
            const newCart=shopping_cart[id]+1
            shopping_cart[id]=newCart
        }
        else{
            shopping_cart[id]=1
        }
    }

    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))
}

//  product store in cart function

const cartStore=()=>{

    const exists=localStorage.getItem('shopping_cart')
    return exists ? JSON.parse(exists):{}
}

export{addTodb,cartStore}