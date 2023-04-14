import { render, screen } from '@testing-library/react'
import Pager from './pager'

describe('Pager', () => {
  const mockProps = {
    currentPageNumber: 2,
    pageSize: 10,
    path: '/example',
    pathNumberPage: 2,
    totalCount: 50,
  }

  it('renders previous page arrow when not on first page', () => {
    render(<Pager {...mockProps} />)
    const arrowLeftElement = screen.getByTestId('arrow-left')
    expect(arrowLeftElement).toBeInTheDocument()
  })

  it('renders next page arrow when not on last page', () => {
    render(<Pager {...mockProps} />)
    const arrowRightElement = screen.getByTestId('arrow-right')
    expect(arrowRightElement).toBeInTheDocument()
  })

  it('renders correct page numbers', () => {
    render(<Pager {...mockProps} />)
    const page1Element = screen.getByText('1')
    const page2Element = screen.getByText('2')
    const page3Element = screen.getByText('3')
    expect(page1Element).toBeInTheDocument()
    expect(page2Element).toBeInTheDocument()
    expect(page3Element).toBeInTheDocument()
  })
})
