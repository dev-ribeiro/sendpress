import Head from 'next/head'
import { Header } from '../../components/Header'
import { Bag } from './components/Bag'
import { CheckoutContainer } from './styles'
import { Summary } from './components/Summary'
import { DefaultLayout } from '../../layouts/DefaultLayout'

export default function CheckoutPage() {

  return (
    <>
      <Head>
        <title>Quase lá...</title>
      </Head>
      <DefaultLayout variant='checkout'>
        <CheckoutContainer>
          <Bag />
          <Summary />
        </CheckoutContainer>
      </DefaultLayout>
    </>
  )
}
