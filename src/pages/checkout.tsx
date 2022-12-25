import Head from 'next/head'
import { Header } from '../components/Header'
import { Bag } from '../components/Checkout/Bag'
import { Summary } from '../components/Checkout/Summary'
import { CheckoutContainer } from '../styles/pages/Checkout'

export default function CheckoutPage() {

  return (
    <>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <Header variant='checkout' />
      <CheckoutContainer>
        <Bag />
        <Summary />
      </CheckoutContainer>
    </>
  )
}
