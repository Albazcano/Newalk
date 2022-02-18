import React from 'react'
import style from '../Hero/Hero.module.css'
export function Hero() {
  return (
    <div className={style.Hero}> 
      <img className={style.img} src='https://www.maxpixel.net/static/photo/1x/Slippers-Shoes-Nature-Vintage-Plants-Aged-Life-5351149.jpg' alt="" />
      <span className={style.heroCard}></span>
    </div>
  )
}
