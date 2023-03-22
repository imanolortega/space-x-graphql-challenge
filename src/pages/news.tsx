import { getNews } from '@/utils/news'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { NewsProps } from '@/utils/interfaces'
import Card from '@/components/card'
import Layout from '@/components/layout'
import moment from 'moment'
import Pager from '@/components/pager'
const ARTICLES_PER_PAGE = 10

export default function NewsPage({
  data,
  page,
}: {
  data: NewsProps[]
  page: number
}) {
  const currentPageNumber = page + 1
  return (
    <Layout title="News">
      <section>
        <h1 className="ml-2">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
        <div className="flex justify-center items-center">
          <Pager
            currentPageNumber={currentPageNumber}
            pageSize={ARTICLES_PER_PAGE}
            path="/news"
            pathNumberPage={page}
            totalCount={15}
          />
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const page = parseInt(query.page as string)
  const offset = page * ARTICLES_PER_PAGE || 0

  const data = await getNews({ limit: ARTICLES_PER_PAGE, offset: offset })
  return {
    props: {
      data: data || [],
      page: page,
    },
  }
}
