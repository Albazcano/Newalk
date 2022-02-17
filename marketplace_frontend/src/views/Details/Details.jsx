import React from 'react';
import style from './Details.module.css';
import useProducts from '../../Contex/Hook/useProducts';

export const Details = () => {
  const {info} = useProducts()

  return (
    <div>
      <img className={style.img} src={info.image} alt="" width='300px'/>
      <h2>{info.name}</h2>
      <p>{info.price}</p>
      <p>Inpuesto no incluido</p>
      <h3>Materiales</h3>
      <p>{info.features}</p>
      <p>{info.size}</p>
    </div>
  );
}
