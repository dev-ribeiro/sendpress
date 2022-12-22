/* eslint-disable react-hooks/exhaustive-deps */
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from '../../@types/products'
import { ProductsScreen } from '../../components/Products'
import { db } from '../../config/firebase'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Header } from '../../components/Header'
import Head from 'next/head'
import { Loading } from '../../components/Loading'

interface ProductsProps {
  product: Product
}

export default function Products({ product }: ProductsProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading/>
  }


  return (
    <>
      <Header variant='checkout' />
      <Head>
        <title>{product.title} - Sendpress</title>
      </Head>
      <ProductsScreen product={product} />
    </>
  )

}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  const slug = params?.slug

  if (process.env.DEVELOPMENT_MODE === 'enabled') {
    const response = await axios.get('http://localhost:3333/data')

    const handleStoreData: Product[] = response.data.map((product: Product) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    const selectedProduct: Product = handleStoreData.find(product => {
      return product.slug === params?.slug
    })!

    return {
      props: {
        slug,
        product: selectedProduct
      },
      revalidate: 60 * 60 * 1
    }
  }

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

  const selectedProduct: Product = handleStoreData.find(product => {
    return product.slug === params?.slug
  })!

  return {
    props: {
      product: selectedProduct
    },
    revalidate: 60 * 60 * 1
  }
}

