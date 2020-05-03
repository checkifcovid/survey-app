import React from 'react'
import { render } from '@testing-library/react'
import Index from '../pages/index'

test('Report a diagnosis button', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(/Report a diagnosis/)
  expect(linkElement).toBeInTheDocument()
})

test('Check your symptoms button', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText(/Check your symptoms/)
  expect(linkElement).toBeInTheDocument()
})
