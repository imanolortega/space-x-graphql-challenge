import Close from '@/icons/close'
import Menu from '@/icons/menu'
import { useState } from 'react'

interface MenuItemProps {
  name: string
  href: string
}

export default function MobileNavbar({ items }: { items: MenuItemProps[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden flex flex-col items-end">
      <button
        className="top-2.5 fixed z-50 right-0 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <Close /> : <Menu />}
      </button>
      {isOpen && (
        <div className="fixed z-40 top-0 right-0 w-screen h-screen p-8 bg-black shadow-xl">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-2xl">
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
