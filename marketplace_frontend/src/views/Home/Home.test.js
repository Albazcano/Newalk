import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Home } from './Home'

test('renders content', () =>{
  const home = {
    content: 'This is a test',
    important:true
  }
  const component = render(<Home home={home} />)
  component.getByText('This is a test')
  component.getByText('make not important')
})