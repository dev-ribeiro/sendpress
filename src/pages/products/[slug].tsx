/* eslint-disable react-hooks/exhaustive-deps */
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { IProduct } from '../../@types/products'
import { ProductsScreen } from '../../components/Products'
import { db } from '../../config/firebase'
import { ProductContext } from '../../contexts/ProductContexts'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Header } from '../../components/Header'
import Head from 'next/head'

interface ProductsProps {
  slug: string
  product: IProduct
}

export default function Products({ slug, product }: ProductsProps) {
  const { store } = useContext(ProductContext)
  const { isFallback } = useRouter()
  const [selectedProduct, setSelectedProduct] = useState({} as IProduct)
  const [error, setError] = useState<any>({})

  useEffect(() => {
    try {
      const result = store.find(product => {
        return product.slug === slug
      })!

      setSelectedProduct(result)
    } catch (error) {
      setError(error)
    }
  }, [])

  if (error) {

    if (isFallback) {
      return <h1>Loading...</h1>
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

  return (
    <>
      <Header variant='checkout' />
      <Head>
        <title>{selectedProduct.title}</title>
      </Head>
      <ProductsScreen product={selectedProduct} />
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

    const handleStoreData: IProduct[] = response.data.map((product: IProduct) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    const selectedProduct: IProduct = handleStoreData.find(product => {
      return product.slug === params?.slug
    })!

    return {
      props: {
        slug,
        product: selectedProduct
      },
      revalidate: 60 * 60 * 1
    }
  } else {
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

    const selectedProduct: IProduct = handleStoreData.find(product => {
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

}
