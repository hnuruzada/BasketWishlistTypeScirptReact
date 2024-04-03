import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../model/Product";

interface BasketContextType{
    basket:Product[],
    wishlist:Product[],
    addToBasket:(product:Product)=>void,
    removeBasket:(productId:number)=>void,
    addToWishlist:(product:Product)=>void,
    removeWishlist:(productId:number)=>void
}

const BasketContext=createContext<BasketContextType | undefined>(undefined)


export const BasketProvider=({children}:any)=>{
    const [basket,setBasket]=useState<Product[]>([])
    const [wishlist,setWishlist]=useState<Product[]>([])

    useEffect(()=>{
        const loadedBasket=localStorage.getItem('basket')
        const loadedWishlist=localStorage.getItem('wishlist')
        if(loadedBasket) setBasket(JSON.parse(loadedBasket))
        if(loadedWishlist) setWishlist(JSON.parse(loadedWishlist))

    },[])
    

    const addToBasket=(product:Product)=>{
        const updatedBasket=[...basket,product]
        setBasket(updatedBasket)
        localStorage.setItem('basket',JSON.stringify(updatedBasket))
    }
    const removeBasket=(productId:number)=>{
        const updatedBasket=basket.filter((item)=>item.id !== productId)
        setBasket(updatedBasket)
        localStorage.setItem('basket',JSON.stringify(updatedBasket))
    }

    const addToWishlist=(product:Product)=>{
        const updatedWishlist=[...wishlist,product]
        setWishlist(updatedWishlist)
        localStorage.setItem('wishlist',JSON.stringify(updatedWishlist))
    }

    const removeWishlist=(productId:number)=>{
        const updatedWishlist=wishlist.filter(item=>item.id!==productId)
        setWishlist(updatedWishlist)
        localStorage.setItem('wishlist',JSON.stringify(updatedWishlist))
    }

    return(
        <BasketContext.Provider value={{basket,wishlist,addToBasket,addToWishlist,removeBasket,removeWishlist}}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket=()=>{
    const context=useContext(BasketContext)
    if(!context){
        throw new Error("COntext yoxdur!");
        
    }
    return context
}