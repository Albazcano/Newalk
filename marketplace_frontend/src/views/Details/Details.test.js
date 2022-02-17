import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Details } from './Details'

test('renders content', () =>{
  const details = {
    content: 'This is a test',
    important:true
  }
  const component = render(<Details />)
  console.log(component)
})