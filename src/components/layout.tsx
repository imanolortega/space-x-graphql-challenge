import { LayoutProps } from '@/utils/interfaces'
import ClientOnly from './client-only'
import Footer from '@/components/footer'
import Main from '@/components/main'
import Navbar from '@/components/navbar'
import PageHead from '@/components/head'

import { Space_Grotesk } from 'next/font/google'
const space = Space_Grotesk({ subsets: ['latin'] })

export default function Layout({ children, className, title }: LayoutProps) {
  return (
    <ClientOnly>
      <div
        className={`${space.className} ${className} grid grid-rows-[auto,1fr,auto] h-screen w-screen`}
      >
        <PageHead title={title} />
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ClientOnly>
  )
}
