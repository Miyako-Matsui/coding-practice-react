import '@testing-library/jest-dom'
import React from 'react'
import App from '../components/App'
import { render, screen } from '@testing-library/react'

it('should display a header', () => {
  render(<App />)

  expect(screen.getByText('App')).toBeInTheDocument()
})
