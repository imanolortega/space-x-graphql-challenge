import { render, screen } from '@testing-library/react'
import NewsPage from '@/pages/news'

describe('NewsPage', () => {
  const newsData = [
    {
      id: '1',
      details: 'Sample details 1',
      event_date_utc: '2022-01-01T00:00:00.000Z',
      flight: {
        details: 'Sample flight details 1',
        mission_name: 'Sample mission name 1'
      },
      links: {
        article: 'https://samplelink1.com'
      },
      title: 'Sample title 1'
    },
    {
      id: '2',
      details: 'Sample details 2',
      event_date_utc: '2022-01-01T00:00:00.000Z',
      flight: {
        details: 'Sample flight details 2',
        mission_name: 'Sample mission name 2'
      },
      links: {
        article: 'https://samplelink2.com'
      },
      title: 'Sample title 2'
    },
  ]

  it('renders the news data correctly', () => {
    const page = 0
    render(<NewsPage data={newsData} page={page} />)

    const newsTitles = screen.getAllByRole('article')
    expect(newsTitles.length).toEqual(newsData.length)
  })
})
