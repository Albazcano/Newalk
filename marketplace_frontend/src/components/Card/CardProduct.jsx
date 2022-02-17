import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Contex/Hook/useProducts";

export function CardProduct({
  name,
  image,
  features,
  description,
  price,
  size,
}) {
  const { info, setInfo } = useProducts();
  const infoProduct = () => {
    info.name = name;
    info.image = image;
    info.features = features;
    info.description = description;
    info.price = price;
    info.size = size;
    setInfo(info);
    console.log(info);
  };
  return (
    <>
      <img src={image} alt="image product" />
      <p>{name}</p>
      <span>{price}</span>
      <Link to="/details">
        <button onClick={infoProduct}>Detalles</button>
      </Link>
    </>
  );
}
