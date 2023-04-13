import { render } from '@testing-library/react'
import Layout from './layout'

describe('Layout', () => {
  it('renders children components with correct props and classNames', () => {
    const children = <div data-testid="children">Children Component</div>
    const className = 'custom-class'
    const title = 'Test Title'

    const { getByTestId, getByRole } = render(
      <Layout className={className} title={title}>
        {children}
      </Layout>,
    )

    const childrenComponent = getByTestId('children')
    expect(childrenComponent).toBeInTheDocument()
    expect(childrenComponent.textContent).toBe('Children Component')

    const layoutElement = getByTestId('layout')
    expect(layoutElement).toHaveClass('grid')
    expect(layoutElement).toHaveClass('grid-rows-[auto,1fr,auto]')
    expect(layoutElement).toHaveClass('h-screen')
    expect(layoutElement).toHaveClass('w-screen')
    expect(layoutElement).toHaveClass('overflow-x-hidden')

    const navbarComponent = getByRole('navigation')
    expect(navbarComponent).toBeInTheDocument()

    const mainComponent = getByRole('main')
    expect(mainComponent).toBeInTheDocument()

    const footerComponent = getByRole('contentinfo')
    expect(footerComponent).toBeInTheDocument()
  })
})
