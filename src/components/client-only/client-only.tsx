//Client Only: Component to prevent rehydration issues

import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

interface Props {
  children: ReactNode
}

const ClientOnly: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...delegated
}) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div className='h-screen w-screen' {...delegated}>{children}</div>
}

export default ClientOnly
