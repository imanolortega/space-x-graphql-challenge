import { LAUNCHES } from '@/graphql/launches.query'
import client from './apolloClient'

export async function getLaunches() {
  const data = await client.query({
    query: LAUNCHES,
  })

  return data.data.launches
}
