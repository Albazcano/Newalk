import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Filter } from './Filter'

test('renders content', () =>{
  const filter = {
    content: 'This is a test',
    important:true
  }
  const component = render(<Filter />)
  console.log(component)
})