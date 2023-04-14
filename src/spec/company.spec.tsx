import { render, screen } from '@testing-library/react'
import CompanyPage from '@/pages/company'

describe('CompanyPage', () => {
  const companyData = {
    summary: 'Sample summary',
    ceo: 'Sample CEO',
    coo: 'Sample COO',
    founded: 2002,
    headquarters: {
      city: 'Sample city',
      state: 'Sample state',
    },
  }

  it('renders the company data correctly', () => {
    render(<CompanyPage data={companyData} />)

    const summary = screen.getByText('Sample summary')
    expect(summary).toBeInTheDocument()

    const ceo = screen.getByText('CEO: Sample CEO')
    expect(ceo).toBeInTheDocument()

    const coo = screen.getByText('COO: Sample COO')
    expect(coo).toBeInTheDocument()

    const founded = screen.getByText('Founded in 2002')
    expect(founded).toBeInTheDocument()

    const headquarters = screen.getByText(
      'Headquarters in Sample city - Sample state',
    )
    expect(headquarters).toBeInTheDocument()
  })
})
