import Head from 'next/head'
import { Header } from '../components/Header'
import { CheckoutScreenContainer } from '../styles/pages/Checkout'
import { ShoppingBag } from 'phosphor-react'
import { Summary } from '../components/Checkout/Summary'

export default function CheckoutPage() {

  return (
    <>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <Header variant='checkout' />
      <CheckoutScreenContainer>
        <ShoppingBag />
        <Summary />
      </CheckoutScreenContainer>
    </>
  )
}
