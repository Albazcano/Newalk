import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Filter.module.css";
import { shoes } from "../../Data/prueba.js";
import useProducts from "../../Contex/Hook/useProducts";

export const Filter = () => {
  const { infoProduct } = useProducts();
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts(shoes["VESICA PISCIS"]);
  }, [products]);
  return (
    <div className={style.Filter}>
     
      {products.map((item) => (
        <div key={item.id} className={style.card}>
          <Link to="/details">
            <img
              onClick={()=>infoProduct(
                item.name,
                item.link_imag,
                item.features,
                item.description,
                item.price,
                item.size
              )}
              src={item.link_imag}
              alt="image product"
            />
          </Link>
          <p>{item.name}</p>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
};
