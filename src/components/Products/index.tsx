/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { IProduct } from '../../@types/products'
import { ProductContext } from '../../contexts/ProductContexts'
import { AmountSelectorContainer, ApresentationProductContainer, ButtonInteractionContainer, ProductCartSummary, ProductContainer, ProductDescriptionContainer } from './styles'

interface ProductsScreenProps {
  product: IProduct
}

export function ProductsScreen({ product }: ProductsScreenProps) {
  const { title, description } = product


  return (
    <ProductContainer>
      <Head>
        <title>{title} - Sendpress</title>
      </Head>
      <ApresentationProductContainer>
        <Image
          src={'https://source.unsplash.com/random'}
          alt=""
          width={720}
          height={407}
        />
        <ProductCartSummary>
          <h2>{title}</h2>
          <AmountSelectorContainer>
            <label htmlFor="">Quantidade:</label>
            <input
              type="number"
              name=""
              id=""
              min={0}
              max={100}
            />
          </AmountSelectorContainer>
          <ButtonInteractionContainer variant='cart'>
            <ShoppingCart size={22} weight="fill" />
            <span>ENVIAR AO CARRINHO</span>
          </ButtonInteractionContainer>
          <ButtonInteractionContainer variant='buy'>
            <span>COMPRAR</span>
          </ButtonInteractionContainer>
        </ProductCartSummary>
      </ApresentationProductContainer>
      <ProductDescriptionContainer>
        <h2>Descrição do produto</h2>
        <div>{description}</div>
      </ProductDescriptionContainer>
    </ProductContainer>
  )

}
