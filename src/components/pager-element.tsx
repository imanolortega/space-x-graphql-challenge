import { PageElementProps } from '@/utils/interfaces'
import Link from 'next/link'

export function PagerElement({
  currentPageNumber,
  icon,
  iconClassName,
  number,
  path,
}: PageElementProps) {
  const ElementContainer = path ? Link : 'div'

  return (
    <ElementContainer href={path}>
      <span className={`${number === currentPageNumber && 'active-element'}`}>
        {number}
      </span>
    </ElementContainer>
  )
}
