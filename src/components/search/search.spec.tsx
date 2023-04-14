import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './search'

describe('SearchBar', () => {
  const mockSearchTerm = 'example'
  const mockSetSearchTerm = jest.fn()

  it('renders correctly with initial search term', () => {
    const { getByLabelText, getByDisplayValue } = render(
      <SearchBar
        searchTerm={mockSearchTerm}
        setSearchTerm={mockSetSearchTerm}
      />,
    )

    const labelElement = getByLabelText('Search launches:')
    const inputElement = getByDisplayValue(mockSearchTerm)

    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  it('updates search term on input change', () => {
    const { getByLabelText } = render(
      <SearchBar
        searchTerm={mockSearchTerm}
        setSearchTerm={mockSetSearchTerm}
      />,
    )

    const inputElement = getByLabelText('Search launches:')
    const newSearchTerm = 'new example'

    fireEvent.change(inputElement, { target: { value: newSearchTerm } })

    expect(mockSetSearchTerm).toHaveBeenCalledWith(newSearchTerm)
  })
})
