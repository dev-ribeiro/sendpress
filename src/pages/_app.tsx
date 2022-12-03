import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/defaultTheme'
import { ProductContextProvider } from '../contexts/ProductContexts'
import { Footer } from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ProductContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </ProductContextProvider>
  )
}
