import { render } from '@testing-library/react'
import Card from './card'
import { CardProps } from '@/utils/interfaces'

describe('Card', () => {
  it('should render successfully', () => {
    const props: CardProps = {
      href: 'https://example.com',
      title: 'Example Title',
      details: 'Example Details'
    }
    const { baseElement } = render(<Card {...props} />)
    expect(baseElement).toBeTruthy()
  })
})