import { gql } from '@apollo/client'

export const NEWS = gql`
  query News($limit: Int!, $offset: Int!) {
    histories(limit: $limit, offset: $offset) {
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
