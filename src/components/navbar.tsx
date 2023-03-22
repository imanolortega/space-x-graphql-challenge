import { links } from '@/utils/menu'
import Image from 'next/image'
import Link from 'next/link'
import MobileNabvar from './mobile-navbar'

export default function Navbar() {
  return (
    <nav
      className="h-16 px-6 py-4
      flex justify-between items-center
      border-b border-gray-800"
    >
      <Link href="/">
        <Image
          className="mb-2"
          alt="SpaceX Logo"
          src="/images/spacex-white.png"
          width={200}
          height={50}
        />
      </Link>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li className="ml-4 uppercase font-semibold text-lg" key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <MobileNabvar items={links} />
    </nav>
  )
}
