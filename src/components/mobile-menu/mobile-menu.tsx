import Close from '@/icons/close'
import Menu from '@/icons/menu'
import { MenuItemProps } from '@/utils/interfaces'
import { useState } from 'react'

export default function MobileMenu({ items }: { items: MenuItemProps[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    ...items,
  ]

  function toggleMenu() {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'initial' : 'hidden'
  }

  return (
    <div className="md:hidden flex h-10 w-10 items-center justify-end">
      <button className="z-50" onClick={() => toggleMenu()}>
        {isOpen ? <Close /> : <Menu />}
      </button>
      {isOpen && (
        <div className="fixed z-40 top-0 right-0 w-screen h-screen pt-20 pl-6 bg-black shadow-xl">
          <ul className="space-y-2 uppercase">
            {links.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-xl">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
