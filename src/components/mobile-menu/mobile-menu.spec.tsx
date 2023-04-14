import { render, fireEvent, screen } from '@testing-library/react'
import MobileMenu from './mobile-menu'

describe('MobileMenu', () => {
  const items = [
    {
      name: 'Link 1',
      href: '/link1',
    },
    {
      name: 'Link 2',
      href: '/link2',
    },
  ]

  test('renders MobileMenu component with closed menu', () => {
    const { queryByText } = render(<MobileMenu items={items} />)

    const menuButton = screen.getByTestId('menu-button')
    expect(menuButton).toBeInTheDocument()

    const link1 = queryByText('Link 1')
    const link2 = queryByText('Link 2')
    expect(link1).toBeNull()
    expect(link2).toBeNull()
  })

  test('toggles menu when menu button is clicked', () => {
    const { getByText, queryByText } = render(<MobileMenu items={items} />)

    const menuButton = screen.getByTestId('menu-button')
    expect(menuButton).toBeInTheDocument()

    fireEvent.click(menuButton)

    const link1 = getByText('Link 1')
    const link2 = getByText('Link 2')
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()

    fireEvent.click(menuButton)

    const link1Closed = queryByText('Link 1')
    const link2Closed = queryByText('Link 2')
    expect(link1Closed).toBeNull()
    expect(link2Closed).toBeNull()
  })
})
