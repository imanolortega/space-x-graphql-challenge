import { gql } from '@apollo/client'

export const NEWS = gql`
  query News {
    histories(limit: 8, offset: 0) {
      id
      details
      event_date_unix
      event_date_utc
      flight {
        details
        mission_name
      }
      links {
        article
      }
      title
    }
  }
`
