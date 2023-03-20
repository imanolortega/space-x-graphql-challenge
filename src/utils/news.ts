import { NEWS } from '@/graphql/news.query'
import client from './apolloClient'

export async function getNews() {
  const data = await client.query({
    query: NEWS,
    variables: {
      limit: 10,
      offset: 0,
    },
  })

  return data.data.histories
}
