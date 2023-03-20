import { CompanyProps } from '@/utils/interfaces'
import { getCompany } from '@/utils/company'

import Layout from '@/components/layout'

export default function CompanyPage({ data }: { data: CompanyProps }) {
  return (
    <Layout title="Company">
      <section className="company_bg flex items-center gradients">
        <div className="w-6/12 py-6 px-16">
          <h1>Company</h1>
          <p>{data.summary}</p>
          <br />
          <p>CEO & CTO: {data.ceo}</p>
          <p>COO: {data.coo}</p>
          <p>Founded in {data.founded}</p>
          <p>
            Headquarters in {data.headquarters.city} - {data.headquarters.state}
          </p>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getCompany()
  return {
    props: {
      data: data || {},
    },
  }
}
