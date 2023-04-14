import Link from 'next/link'
import { CardProps } from '@/utils/interfaces'

export default function Card({
  href,
  title,
  details,
  date,
  extraDetails,
  role,
}: CardProps) {
  const CardContainer = href ? Link : 'div'

  return (
    <CardContainer
      href={href}
      className="
        bg-black
        border border-gray-700
        px-6 py-8
        rounded-lg z-20"
      rel={href ? 'noopener noreferrer' : undefined}
      role={role}
      target={href ? '_blank' : undefined}
    >
      <h3 className="mb-2">{title}</h3>
      <p className="mb-2 line-clamp text-base">{details}</p>
      {extraDetails && <p className="mb-2 text-base">{extraDetails}</p>}
      {date && <p className="text-base">{date}</p>}
    </CardContainer>
  )
}
