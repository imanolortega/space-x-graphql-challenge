import { NEWS } from '@/graphql/news.query'
import client from './apolloClient'

export async function getNews({
  limit,
  offset,
}: {
  limit: number
  offset: number
}) {
  console.log('getNews', limit, offset)
  const data = await client.query({
    query: NEWS,
    variables: {
      limit: limit,
      offset: offset,
    },
  })

  return data.data.histories
}
