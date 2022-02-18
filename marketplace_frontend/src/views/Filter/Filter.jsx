import React, { useEffect, useState } from "react";
import style from "./Filter.module.css";
import { shoes } from "../../Data/prueba.js";
import { CardProduct } from "../../components/Card/CardProduct";

export const Filter = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(shoes["VESICA PISCIS"]);
  }, [products]);

  return (
    <div className={style.Filter}>
      {products.map((item) => (
        <div key={item.id} className={style.card}>
          <CardProduct
            name={item.name}
            image={item.link_imag}
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
