import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import LaunchesPage from '@/pages/launches'

describe('LaunchesPage', () => {
  const data = [
    {
      details: 'Engine failure at 33 seconds and loss of vehicle',
      id: '5eb87cd9ffd86e000604b32a',
      launch_date_local: '2006-03-25T10:30:00+12:00',
      links: {
        article_link:
          'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
        __typename: 'LaunchLinks',
      },
      mission_name: 'FalconSat',
      rocket: {
        rocket: { name: 'Falcon 1', __typename: 'Rocket' },
        __typename: 'LaunchRocket',
      },
      __typename: 'Launch',
    },
  ]

  it('renders the correct number of Card components', () => {
    render(<LaunchesPage data={data} />)
    const cardComponents = screen.getAllByRole('article')
    expect(cardComponents.length).toBe(data.length)
  })

  it('filters the data correctly based on search term', () => {
    render(<LaunchesPage data={data} />)
    const searchTerm = 'FalconSat'.toLowerCase()
    const searchInput = screen.getByRole('searchbox')
    fireEvent.change(searchInput, { target: { value: searchTerm } })
    const filteredDataMissionNames = screen
      .getAllByRole('article')
      .map((card) => card?.textContent?.toLowerCase())
    expect(filteredDataMissionNames).toEqual(
      expect.arrayContaining([expect.stringContaining(searchTerm)]),
    )
  })
})
