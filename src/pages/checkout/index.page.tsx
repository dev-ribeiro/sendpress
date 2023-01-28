import Head from 'next/head'
import { Header } from '../../components/Header'
import { Bag } from './components/Bag'
import { CheckoutContainer } from '../../styles/pages/Checkout'
import { Summary } from './components/Summary'

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
