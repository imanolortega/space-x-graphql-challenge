import Navbar from '@/components/navbar'
import PageHead from '@/components/head'
import Footer from '@/components/footer'
import Main from '@/components/main'

import { LayoutProps } from '@/utils/interfaces'
import { Space_Grotesk } from 'next/font/google'
const space = Space_Grotesk({ subsets: ['latin'] })

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div
      className={`${space.className} grid grid-rows-[auto,1fr,auto]
      h-screen`}
    >
      <PageHead title={title} />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
