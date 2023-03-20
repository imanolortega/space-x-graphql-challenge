import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout
      title="Home"
      >
      <section className="flex flex-col w-full items-center justify-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400 text-5xl">
          Rediscover the Space
        </h1>
        <p className="text-slate-400">
          SpaceX designs, manufactures and launches advanced rockets and
          spacecraft
        </p>
        <div></div>
      </section>
      <div className="gradients"></div>
    </Layout>
  )
}
