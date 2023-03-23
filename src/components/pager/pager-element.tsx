import { PageElementProps } from '@/utils/interfaces'
import Link from 'next/link'

export function PagerElement({ children, className, path }: PageElementProps) {
  const ElementContainer = path ? Link : 'div'
  return (
    <ElementContainer
      className={`${className}
        h-8 w-8 mx-1 rounded
        border border-gray-700
        flex items-center justify-center`}
      href={path || '/'}
    >
      <span>{children}</span>
    </ElementContainer>
  )
}
