import { COMPANY } from '@/graphql/company.query'
import client from './apolloClient'

export async function getCompany() {
  const data = await client.query({
    query: COMPANY,
  })

  return data.data.company
}
