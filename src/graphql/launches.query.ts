import { gql } from '@apollo/client'

export const LAUNCHES = gql`
  query Launches {
    launches(limit: 20) {
      mission_name
      details
      id
      launch_date_local
      links {
        article_link
      }
      rocket {
        rocket {
          name
        }
      }
    }
  }
`
