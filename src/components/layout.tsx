import Navbar from '@/components/navbar'
import PageHead from '@/components/head'

import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/footer'
import Main from '@/components/main'
const space = Space_Grotesk({ subsets: ['latin'] })

export default function Layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <div
      className={`${space.className} grid grid-rows-[auto,1fr,auto] h-screen`}
    >
      <PageHead />
      <Navbar />
      <Main>
        {
          children
        }
      </Main>
      <Footer />
    </div>
  )
}
