import { links } from '@/utils/menu'

export default function Footer() {
  return (
    <footer
      className="h-16 px-6 py-4
      flex justify-center items-center
      border-t border-gray-800 bg-black"
    >
      <div className="flex">
        {links.map((link) => (
          <a className="mr-6 last:mr-0" href={link.href} key={link.name}>
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
