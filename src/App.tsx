import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { fetchProducts } from './api/api';
import { Product } from './model/Product';
import { useBasket } from './context/BasketContext';


const App:React.FC=()=> {

  const [product,setProduct]=useState<Product[]>([])
  const {addToBasket,removeBasket,addToWishlist}=useBasket()

  console.log(fetchProducts());
    

  useEffect(()=>{
    const getProduct=async ()=>{
      const FetchedProducts=await fetchProducts()
        setProduct(FetchedProducts)      
    }
    getProduct()
  },[])


  return (
    <>
    {product && product.map((item)=>(
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <button onClick={()=>addToBasket(item)}>Add Basket</button>
        <button onClick={()=>addToWishlist(item)}>Add Wishlist</button>
        <button onClick={()=>removeBasket(item.id)}>Delete</button>
      </div>
    ))}
    </>
  );
}

export default App;
