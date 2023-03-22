import { useState, useEffect } from 'react'

export function useShowElementOnScroll() {
  const [showElement, setShowElement] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 35) {
        setShowElement(false)
      } else {
        setShowElement(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return showElement
}
