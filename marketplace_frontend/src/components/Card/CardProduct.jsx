import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Contex/Hook/useProducts";
import { Card, Button } from "react-bootstrap";
import style from "./CardProduct.module.css"

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
    <Card className={style.Card}>
  <Card.Img className= {style.img} variant="top" src={image} alt="image product"/>
  <Card.Body>
    <Card.Title className={style.title}>{name}</Card.Title>
    <Card.Text className={style.text}>
    {price}
    </Card.Text >
    <Link to="/details">
       <Button className={style.button} variant="primary" onClick={infoProduct}>Detalles</Button>
    </Link>   
  </Card.Body>
</Card>

     {/*  <img src={image} alt="image product" />
      <p>{name}</p>
      <span>{price}</span>
      <Link to="/details">
        <button onClick={infoProduct}>Detalles</button>
      </Link> */}
    </>
  );
}
