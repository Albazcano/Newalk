import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function CarouselContainer() {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <Link to='/details'>
    <img
      className="d-block w-50"
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-shoes-beflamboyant-manimal-black-side-view_1024x1024@2x.jpg?v=1637142787"
      alt="First slide"
    />
    </Link>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Link to='/details'>
    <img
      className="d-block w-50"
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-shoes-beflamboyant-ux68-leopard-side-view_1024x1024@2x.jpg?v=1643442921"
      alt="Second slide"
    />
  </Link>
  
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Link to='/details'>
    <img
      className="d-block w-50"
      src="https://cdn.shopify.com/s/files/1/0511/6592/1467/products/vegan-sneakers-caramel-side_1024x1024@2x.jpg?v=1644169671"
      alt="Third slide"

    />
</Link>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
