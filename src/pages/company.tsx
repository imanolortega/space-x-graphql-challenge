import { CompanyProps } from '@/utils/interfaces'
import { getCompany } from '@/utils/company'
import Layout from '@/components/layout'

export default function CompanyPage({ data }: { data: CompanyProps }) {
  return (
    <Layout title="Company">
      <section className="company_bg flex md:items-center">
        <div className="md:w-6/12 md:py-6 md:px-16">
          <h1>Company</h1>
          <p>{data.summary}</p>
          <br />
          <p className="text-base">CEO & CTO: {data.ceo}</p>
          <p className="text-base">COO: {data.coo}</p>
          <p className="text-base">Founded in {data.founded}</p>
          <p className="text-base">
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
