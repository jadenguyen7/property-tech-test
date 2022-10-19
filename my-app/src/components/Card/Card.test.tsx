import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

test('renders Card', () => {
	render(<Card />)
	const text = screen.getByText('Property 1')
	expect(text).toBeInTheDocument()
})
