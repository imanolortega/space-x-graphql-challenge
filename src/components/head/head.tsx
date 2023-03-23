import Head from 'next/head'

export default function PageHead({ title }: { title: string }) {
  const meta = {
    description: 'React Technical Challenge: NextJS, TypeScript, Tailwind, GraphQL and Jest.',
    image: 'https://challenge-imanolrtega.vercel.app/images/mars_landing.jpg',
    type: 'website',
    url: 'https://challenge-imanolrtega.vercel.app/',
  }

  return (
    <Head>
      <title>SpaceX | {title}</title>
      <meta content={meta.description} name="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta property="og:url" content={meta.url} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Más Canales" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={`SpaceX | ${title}`} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`SpaceX | ${title}`} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
