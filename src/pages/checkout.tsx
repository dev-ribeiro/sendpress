import Head from 'next/head'
import { Header } from '../components/Header'
import { CheckoutScreen } from '../components/Checkout'

export default function CheckoutPage(){
  return (
    <>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <CheckoutScreen />
    </>
  )
}
