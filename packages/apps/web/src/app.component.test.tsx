import React from 'react'
import { render } from '@testing-library/react'
import { App } from './app.component'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Table/i)
  expect(linkElement).toBeInTheDocument()
})
