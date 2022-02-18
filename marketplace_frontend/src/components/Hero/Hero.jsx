import React from 'react'
import style from '../Hero/Hero.module.css'
import logo from '../../Assets/img/NewalkLogo.png'

export function Hero() {
  return (
    <div className={style.Hero}> 
      <img className={style.imgFondo} src='https://www.maxpixel.net/static/photo/1x/Slippers-Shoes-Nature-Vintage-Plants-Aged-Life-5351149.jpg' alt="" />
      <span className={style.heroCard}></span>
      <img className={style.imgLogo} src={logo} alt="" width='200px' />
      <p>NOS DEDICAMOS A ENCONTRAR EL MEJOR Y MÁS NATURAL CALZADO PARA TÍ</p>
    </div>
  )
}
