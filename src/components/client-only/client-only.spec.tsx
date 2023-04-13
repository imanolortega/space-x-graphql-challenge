import { render } from '@testing-library/react'
import ClientOnly from './client-only'

describe('ClientOnly', () => {
  it('renders children when hasMounted is true', () => {
    const { getByText } = render(
      <ClientOnly>
        <div>Children content</div>
      </ClientOnly>
    )

    expect(getByText('Children content')).toBeInTheDocument()
  })

  it('does not render children when hasMounted is false', () => {
    const { queryByText } = render(
      <ClientOnly>
        {null}
      </ClientOnly>
    )

    expect(queryByText('Children content')).toBeNull()
  })
})
