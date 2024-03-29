import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import 'keen-slider/keen-slider.min.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/defaultTheme'
import { ProductContextProvider } from '../contexts/StoreContext'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ProductContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </ProductContextProvider>
  )
}
