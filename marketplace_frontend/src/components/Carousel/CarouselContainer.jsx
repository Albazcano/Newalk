import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './CarouselContainer.module.css'

export function CarouselContainer() {
  return (
    <div>
  <Carousel variant="dark">
  <Carousel.Item>
    <Link to='/details'>
    <img
      className={style.img_carousel}
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-shoes-beflamboyant-manimal-black-side-view_1024x1024@2x.jpg?v=1637142787"
      alt="First slide"
    />
    </Link>
    <Carousel.Caption>
      <h3 className={style.h3}>Zapatillas veganas Manimal Blackl</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Link to='/details'>
    <img
      className={style.img_carousel}
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-shoes-beflamboyant-ux68-leopard-side-view_1024x1024@2x.jpg?v=1643442921"
      alt="Second slide"
    />
  </Link>
  
    <Carousel.Caption>
      <h3 className={style.h3}>Zapatos veganos de leopardo</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Link to='/details'>
    <img
      className={style.img_carousel}
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-sneakers-caramel-side_1024x1024@2x.jpg?v=1644169671"
      alt="Third slide"

    />
</Link>
    <Carousel.Caption>
      
      <h3 className={style.h3}>Zapatos veganos de color caramelo</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
