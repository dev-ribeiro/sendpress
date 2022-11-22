import Head from 'next/head'
import { Header } from '../components/Header'
import { CheckoutScreen } from '../screens/Checkout'

export default function CheckoutPage(){
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
