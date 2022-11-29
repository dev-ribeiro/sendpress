import Head from 'next/head'
import { Header } from '../components/Header'
import { CheckoutScreen } from '../components/Checkout'
import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContexts'

export default function CheckoutPage() {
  const { error } = useContext(ProductContext)

  if (error) {
    <>
      <Head>
        <title>Acesse a home</title>
      </Head>
      <p>Você está tentando acessar diretamente o checkout sem nenhum produto ou sem passar pela home. Tente novamente acessando a nossa página inicial por <a href='https://sendpress.com.br'>aqui</a>.</p>
    </>
  }

  return (
    <>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <Header variant='checkout' />
      <CheckoutScreen />
    </>
  )
}
