import { render } from '@testing-library/react'
import Main from './main'

describe('Main component', () => {
  it('renders children prop correctly', () => {
    const children = <div data-testid="test-children">Test Children</div>

    const { getByTestId } = render(<Main>{children}</Main>)

    const childrenElement = getByTestId('test-children')
    expect(childrenElement).toBeInTheDocument()
    expect(childrenElement.textContent).toBe('Test Children')
  })
})
