import Layout from '@/components/layout'
import { NewsProps } from '@/utils/interfaces'
import { getNews } from '@/utils/news'
import Link from 'next/link'

export default function Rockets({ data }: { data: NewsProps[] }) {
  console.log(data)
  return (
    <Layout title="News">
      <section>
        <h1>News</h1>
        <div className="grid grid-cols-4">
          {data.map((news) => (
            <Link
              href={news.links.article}
              key={news.id}
              className="bg-slate-900 p-4 m-4 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{news.title}</h3>
              <p>{news.details}</p>
              <p>{news.event_date_utc}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getNews()
  return {
    props: {
      data: data || [],
    },
  }
}
