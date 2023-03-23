import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home page', () => {
  it('renders the correct content', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Rediscover the Space',
    )
    expect(
      screen.getByText(
        'SpaceX designs, manufactures and launches advanced rockets and spacecraft',
      ),
    ).toBeInTheDocument()
    expect(screen.getByTestId('layout')).toHaveClass('home_bg')
    expect(screen.getByTestId('layout')).toContainElement(
      screen.getByRole('heading', { level: 1 }),
    )
  })
})
