import React, { useEffect, useState } from "react";
import style from "./Filter.module.css";
//import { shoes } from "../../Data/prueba.js";
import { CardProduct } from "../../components/Card/CardProduct";

export const Filter = () => {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:8888/brands'
  /* */
   const fetchProducts = async (url) => {
     const res = await fetch(url)
     const productsJSON = await res.json()
     setProducts(productsJSON)
   }
 
   useEffect(() => {
       fetchProducts(url)
    
   }, [products]);

  return (
    <div className={style.Filter}>
      {products.map((item) => (
        <div key={item.id} className={style.card}>
          <CardProduct
            name={item.name}
            image={item.imgUrl}
            features={item.features}
            description={item.description}
            price={item.price}
            sixe={item.size}
          />
        </div>
      ))}
    </div>
  );
};
