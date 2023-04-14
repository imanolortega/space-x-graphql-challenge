import { render } from '@testing-library/react'
import PageHead from './head'

describe('PageHead', () => {
  it('renders PageHead component', () => {
    render(<PageHead title="Home" />)
  })
})
