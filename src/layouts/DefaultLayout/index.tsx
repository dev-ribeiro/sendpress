import { ReactNode } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

interface DefaultLayoutProps {
    children: ReactNode
    variant: 'default' | 'checkout'
}

export function DefaultLayout({ children, variant }: DefaultLayoutProps) {
  return (
    <>
      <Header variant={variant}/>
      {children}
      <Footer />
    </>
  )
}
