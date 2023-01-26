/* eslint-disable react-hooks/exhaustive-deps */
import { v4 as uuidv4 } from 'uuid'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Product } from '../@types/products'
import { Header } from '../components/Header'
import Image from 'next/image'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { HomeContainer } from '../styles/pages/Home'
import banner from '../assets/banner.png'
import { Store } from '../components/Home/Store'
import { BriefStore } from '../components/Home/BriefStore'

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

export const getStaticProps: GetStaticProps = async () => {

  const querySnapshot = await getDocs(collection(db, 'store'))
  const storeData: any = []
  querySnapshot.forEach(doc => {
    storeData.push(doc.data())
  })

  const handleStoreData: Product[] = storeData.map((product: Product) => {
    return {
      ...product,
      id: uuidv4(),
      amountSelected: 0,
      isCheckoutCart: false,
    }
  })

  return {
    props: {
      store: handleStoreData
    },
    revalidate: 60 * 60 * 1
  }
}
