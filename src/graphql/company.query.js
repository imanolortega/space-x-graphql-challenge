import { gql } from '@apollo/client'

export const COMPANY = gql`
  query Company {
    company {
      ceo
      coo
      cto
      employees
      founded
      founder
      headquarters {
        city
        state
      }
      launch_sites
      summary
    }
  }
`
