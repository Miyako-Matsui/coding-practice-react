import '@testing-library/jest-dom'
import React from 'react'
import Name from '../components/Name'
import { render, screen } from '@testing-library/react'

it('should display names', () => {
  render(<Name />)

  const names = ['John Doe', 'Jane Doe', 'Billy Doe']
  names.map((name) => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })
})
