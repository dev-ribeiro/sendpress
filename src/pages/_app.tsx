import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/defaultTheme'
import { ProductContextProvider } from '../contexts/ProductContexts'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ProductContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </ProductContextProvider>
  )
}

export default MyApp
