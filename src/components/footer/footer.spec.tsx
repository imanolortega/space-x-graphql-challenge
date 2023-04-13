import { render } from '@testing-library/react'
import Footer from './footer'
import { links } from '@/utils/menu'

describe('Footer', () => {
  it('renders footer component with correct links', () => {
    const { getByText } = render(<Footer />)

    const linkElements = links.map((link) => getByText(link.name))
    expect(linkElements.length).toBe(links.length)

    linkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveAttribute('href', links[index].href)
    })
  })
})
