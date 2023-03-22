import Card from '@/components/card'
import Layout from '@/components/layout'
import { LaunchProps } from '@/utils/interfaces'
import { getLaunches } from '@/utils/launches'
import moment from 'moment'

export default function LaunchesPage({ data }: { data: LaunchProps[] }) {
  console.log(data)
  return (
    <Layout title="Launches">
      <section>
        <h1 className="ml-2">Launches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {data.map(
            ({ links, id, mission_name, details, launch_date_local }) => (
              <Card
                href={links.article_link}
                key={id}
                title={mission_name}
                details={details}
                date={moment(launch_date_local).format('D MMMM YYYY')}
              />
            ),
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getLaunches()
  return {
    props: {
      data: data || [],
    },
  }
}
