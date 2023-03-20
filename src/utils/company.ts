import { COMPANY } from '@/graphql/company.query'
import client from './apolloClient'

export async function getCompany() {
  const data = await client.query({
    query: COMPANY,
    variables: { id: 1 },
  })

  const company = data.data.company

  return company
}