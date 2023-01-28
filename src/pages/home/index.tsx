import Head from 'next/head'
import { Header } from '../../components/Header'
import Image from 'next/image'
import banner from '../../assets/banner.png'
import { Product } from '../../@types/products'
import { HomeContainer } from './styles'
import { Store } from './components/Store'
import { BriefStore } from './components/BriefStore'

interface HomeProps {
  store: Product[]
}

export default function Home({ store }: HomeProps) {
  return (
    <>
      <Head>
        <title>Seja bem-vindo a Sendpress</title>
      </Head>
      <Header />
      <HomeContainer>
        <Image src={banner} alt="" />
        <Store store={store} />
        <BriefStore />
      </HomeContainer>
    </>
  )
}
