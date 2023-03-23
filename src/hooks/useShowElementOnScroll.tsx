import { useState, useEffect } from 'react'

export function useShowElementOnScroll({ offset }: { offset: number }) {
  const [showElement, setShowElement] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > offset) {
        setShowElement(false)
      } else {
        setShowElement(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return showElement
}
