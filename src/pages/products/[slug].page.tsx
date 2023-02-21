/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Product } from '../../@types/products'
import Head from 'next/head'
import { ShoppingCart } from 'phosphor-react'
import { whatsappNumber } from '../../utils/contactList'
import { useCreateNumberOption } from '../../hooks/useCreateNumberOptions'
import { Loading } from '../home/components/Loading'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { useKeenSlider } from 'keen-slider/react'
import {
  ProductContainer,
  ApresentationProductContainer,
  ProductImageWrapper,
  ProductCartSummary,
  AmountSelectorContainer,
  ButtonInteractionContainer,
  ProductDescriptionContainer
} from './styles'

interface ProductsProps {
  product: Product
}

export default function Products({ product }: ProductsProps) {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView:1,
        spacing:48
      },
      slideChanged() {
        console.log('slide changed')
      },
    }
  )

  const [amountSelected, setAmountSelected] = useState(1)
  const { options } = useCreateNumberOption()
  const { isFallback } = useRouter()

  function handleAmountSelected(event: ChangeEvent) {
    const target = event.target as HTMLSelectElement
    setAmountSelected(parseInt(target.value))
  }

  if (isFallback) {
    return <Loading />
  }


  return (
    <>
      <Head>
        <title>{product.title} | Sendpress</title>
      </Head>
      <DefaultLayout variant='default'>
        <ProductContainer>
          <ApresentationProductContainer>
            <ProductImageWrapper ref={sliderRef} className="keen-slider__slide">
              {product.imagesPath.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt=""
                  width={720}
                  height={407}
                  className="keen-slider__slide"
                />
              ))}
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
      </DefaultLayout>
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
    const response = await axios.get('http://localhost:14000/data')
    const handleStoreData: Product[] = response.data.map((product: any) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    const product = handleStoreData.find(product => product.slug === slug)

    return {
      props: {
        product
      }
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

  const product = handleStoreData.find(product => product.slug === slug)

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1
  }
}

