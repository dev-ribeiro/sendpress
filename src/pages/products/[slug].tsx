/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from '../../@types/products'
import { db } from '../../config/firebase'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Header } from '../../components/Header'
import Head from 'next/head'
import { Loading } from '../../components/Loading'
import { ShoppingCart } from 'phosphor-react'
import {
  ProductContainer,
  ApresentationProductContainer,
  ProductImageWrapper,
  ProductCartSummary,
  AmountSelectorContainer,
  ButtonInteractionContainer,
  ProductDescriptionContainer
} from '../../styles/pages/Products'
import { whatsappNumber } from '../../utils/contactList'
import { useCreateNumberOption } from '../../hooks/useCreateNumberOptions'

interface ProductsProps {
  product: Product
}

export default function Products({ product }: ProductsProps) {
  const [amountSelected, setAmountSelected] = useState(1)
  const { options } = useCreateNumberOption()

  function handleAmountSelected(event: ChangeEvent) {
    const target = event.target as HTMLSelectElement
    setAmountSelected(parseInt(target.value))
  }
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }


  return (
    <>
      <Header variant='checkout' />
      <Head>
        <title>{product.title} | Sendpress</title>
      </Head>
      <ProductContainer>
        <ApresentationProductContainer>
          <ProductImageWrapper>
            <Image
              src={product.miniature}
              alt=""
              width={720}
              height={407}
            />
          </ProductImageWrapper>
          <ProductCartSummary>
            <h2>{product.title}</h2>
            <AmountSelectorContainer>
              <label htmlFor="">Quantidade:</label>
              <select
                onChange={handleAmountSelected}
              >
                {options.map((num, index) => {
                  return <option key={index} value={num}>{num}</option>
                })}
              </select>
            </AmountSelectorContainer>
            <a
              href={`https://wa.me/+55${whatsappNumber}?text=Olá gostaria de fazer um pedido de ${amountSelected} --- ${product.title}.`}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonInteractionContainer variant='buy'>
                <ShoppingCart size={22} weight="fill" />
                <span>COMPRAR</span>
              </ButtonInteractionContainer>
            </a>
          </ProductCartSummary>
        </ApresentationProductContainer>
        <ProductDescriptionContainer>
          <h2>Descrição do produto</h2>
          <p>{product.description}</p>
        </ProductDescriptionContainer>
      </ProductContainer>
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
  const slug = params!.slug

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
    }
  })

  const product = handleStoreData.find(product => product.slug === slug)

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1
  }
}

