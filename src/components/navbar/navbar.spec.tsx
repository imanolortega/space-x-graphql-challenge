import { render, screen } from '@testing-library/react'
import { links } from '@/utils/menu'
import Navbar from './navbar'

describe('Navbar', () => {
  test('renders logo image', () => {
    render(<Navbar />)
    const logoImage = screen.getByAltText('SpaceX Logo')
    expect(logoImage).toBeInTheDocument()
  })

  test('renders menu links', () => {
    render(<Navbar />)
    const newsLink = screen.getByText('News')
    expect(newsLink).toBeInTheDocument()

    links.forEach((link) => {
      const linkElement = screen.getByText(link.name)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
