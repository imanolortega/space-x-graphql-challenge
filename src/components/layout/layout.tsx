import { LayoutProps } from '@/utils/interfaces'
import ClientOnly from '../client-only/client-only'
import Footer from '@/components/footer/footer'
import Main from '@/components/main/main'
import Navbar from '@/components/navbar/navbar'
import PageHead from '@/components/head/head'

import { Space_Grotesk } from 'next/font/google'
const space = Space_Grotesk({ subsets: ['latin'] })

export default function Layout({ children, className, title }: LayoutProps) {
  return (
    <ClientOnly>
      <div
        className={`${space.className} ${className} grid grid-rows-[auto,1fr,auto] h-screen w-screen overflow-x-hidden`}
        data-testid="layout"
      >
        <PageHead title={title} />
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ClientOnly>
  )
}
