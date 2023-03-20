import { gql } from '@apollo/client'

export const NEWS = gql`
  query News($limit: int!) {
    histories(limit: $limit) {
      id
      details
      event_date_unix
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
