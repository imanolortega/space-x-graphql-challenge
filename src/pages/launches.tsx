import { getLaunches } from '@/utils/launches'
import { LaunchProps } from '@/utils/interfaces'
import Card from '@/components/card/card'
import Layout from '@/components/layout/layout'
import moment from 'moment'
import SearchBar from '@/components/search/search'
import { useMemo, useState } from 'react'

export default function LaunchesPage({ data }: { data: LaunchProps[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredData = useMemo(() => {
    return data.filter((launch) =>
      launch.mission_name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()),
    )
  }, [searchTerm, data])

  return (
    <Layout title="Launches">
      <section>
        <h1 className="page_title">Launches</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {filteredData.map(
            ({
              links,
              id,
              mission_name,
              details,
              launch_date_local,
              rocket,
            }) => (
              <Card
                href={links.article_link}
                key={id}
                title={mission_name}
                details={details}
                extraDetails={`Rocket: ${rocket.rocket.name}`}
                date={moment(launch_date_local).format('D MMMM YYYY')}
                role="article"
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
