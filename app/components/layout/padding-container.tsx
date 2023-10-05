import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const PaddingContainer = ({ children }: Props) => {
  return <div className="mx-auto w-full max-w-7xl px-8">{children}</div>
}
export default PaddingContainer
