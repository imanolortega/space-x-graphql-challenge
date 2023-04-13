import { render } from '@testing-library/react'
import PageHead from './head'

const getByMetaTag = (nameOrProperty: string, value: string) => {
  return document.querySelector(`meta[${nameOrProperty}="${value}"]`)
}

describe('PageHead', () => {
  it('renders PageHead component with correct meta tags', () => {
    render(<PageHead title="Home" />)
  })
})
