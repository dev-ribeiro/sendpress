import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { IProduct } from '../@types/products'
import { Header } from '../components/Header'
import { HomeScreen } from '../components/Home'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../contexts/ProductContexts'
import { useRouter } from 'next/router'

interface HomeProps {
  store: IProduct[]
}

export default function Home({ store }: HomeProps) {
  const { isFallback } = useRouter()
  const { createInitialData, processError } = useContext(ProductContext)

  useEffect(() => {
    try {
      createInitialData(store)
    } catch (error) {
      processError(error)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Seja bem-vindo a Sendpress</title>
      </Head>
      <Header />
      <HomeScreen />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  if (process.env.DEVELOPMENT_MODE === 'enabled') {
    const response = await axios.get('http://localhost:3333/data')

    const handleStoreData: IProduct[] = response.data.map((product: IProduct) => {
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

  const querySnapshot = await getDocs(collection(db, 'store'))
  const storeData: any = []
  querySnapshot.forEach(doc => {
    storeData.push(doc.data())
  })

  const handleStoreData: IProduct[] = storeData.map((product: IProduct) => {
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
