import { Company } from '@/utils/interfaces'
import { getCompany } from '@/utils/company'

import Layout from '@/components/layout'

export default function CompanyPage({ data }: { data: Company }) {
  return (
    <Layout>
      <section>
        <h1 className="text-4xl">Company</h1>
        <p>Summary: {data.summary}</p>
        <p>CEO & CTO: {data.ceo}</p>
        <p>COO: {data.coo}</p>
        <p>Employees: {data.employes}</p>
        <p>Founded: {data.founded}</p>
        <p>Founder: {data.founder}</p>
        <p>Headquarters: {data.headquarters.city} - {data.headquarters.state}</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getCompany()
  return {
    props: {
      data: data,
    },
  }
}
