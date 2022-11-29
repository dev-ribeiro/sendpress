/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import { Link, ShoppingCart } from 'phosphor-react'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { IProduct } from '../../@types/products'
import { ProductContext } from '../../contexts/ProductContexts'
import { whatsappNumber } from '../../utils/contactList'
import { AmountSelectorContainer, ApresentationProductContainer, ButtonInteractionContainer, ProductCartSummary, ProductContainer, ProductDescriptionContainer, ProductImageWrapper } from './styles'

interface ProductsScreenProps {
  product: IProduct
}

export function ProductsScreen({ product }: ProductsScreenProps) {
  const [amountSelected, setAmountSelected] = useState(1)
  const [options, setOptions] = useState<number[]>([])
  const { title, description, miniature } = product

  useEffect(() => {
    const data: number[] = []

    for (let i = 1; i <= 30; i++) {
      data.push(i)
    }

    setOptions(data)
  }, [])

  function handleAmountSelected(event:ChangeEvent){
    const target = event.target as HTMLSelectElement
    setAmountSelected(parseInt(target.value))
  }

  return (
    <ProductContainer>
      <ApresentationProductContainer>
        <ProductImageWrapper>
          <Image
            src={miniature}
            alt=""
            width={720}
            height={407}
          />
        </ProductImageWrapper>
        <ProductCartSummary>
          <h2>{title}</h2>
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
          {/* <ButtonInteractionContainer variant='cart'>
            <ShoppingCart size={22} weight="fill" />
            <span>ENVIAR AO CARRINHO</span>
          </ButtonInteractionContainer> */}
          <a
            href={`https://wa.me/+55${whatsappNumber}?text=Olá gostaria de fazer um pedido de ${amountSelected} --- ${title}.`}
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
        <div>{description}</div>
      </ProductDescriptionContainer>
    </ProductContainer>
  )

}
