import Head from 'next/head'
import { CheckoutScreen } from '../components/CheckoutScreen'
import { Header } from '../components/Header'

export default function CheckoutPage(){
  return (
    <div>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <Header />
      <CheckoutScreen />
    </div>
  )
}
