import Link from 'next/link'
import { CardProps } from '@/utils/interfaces'

export default function Card({ href, title, details, date }: CardProps) {
  const CardContainer = href ? Link : 'div'

  return (
    <CardContainer
      href={href}
      className="
      bg-black
        border border-gray-700
        px-6 py-8
        rounded-lg z-20"
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
    >
      <h3 className="mb-2">{title}</h3>
      <p className="mb-2 line-clamp text-base">{details}</p>
      {date && <p className="text-base">{date}</p>}
    </CardContainer>
  )
}
