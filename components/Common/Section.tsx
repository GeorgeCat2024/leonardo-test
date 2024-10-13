import { ReactNode } from 'react'

export function Section({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl  m-auto">{children}</div>
}
