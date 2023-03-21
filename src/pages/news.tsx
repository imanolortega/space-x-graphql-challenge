import { getNews } from '@/utils/news'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { NewsProps } from '@/utils/interfaces'
import Card from '@/components/card'
import Layout from '@/components/layout'
import moment from 'moment'
const ARTICLES_PER_PAGE = 10

export default function NewsPage({ data }: { data: NewsProps[] }) {
  return (
    <Layout title="News">
      <section>
        <h1 className="ml-2">News</h1>
        <div className="grid grid-cols-4 gap-6">
          {data.map(({ links, id, title, details, event_date_utc }) => (
            <Card
              href={links.article}
              key={id}
              title={title}
              details={details}
              date={moment(event_date_utc).format('D MMMM YYYY')}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const page = parseInt(query.page as string, 10) || 1
  const offset = page * ARTICLES_PER_PAGE || 0

  console.log('page', page)
  console.log('offset', offset)

  const data = await getNews({limit: ARTICLES_PER_PAGE, offset: offset})
  return {
    props: {
      data: data || [],
    },
  }
}
