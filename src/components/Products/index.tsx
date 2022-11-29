/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { IProduct } from '../../@types/products'
import { ProductContext } from '../../contexts/ProductContexts'
import { AmountSelectorContainer, ApresentationProductContainer, ButtonInteractionContainer, ProductCartSummary, ProductContainer, ProductDescriptionContainer, ProductImageWrapper } from './styles'

interface ProductsScreenProps {
  product: IProduct
}

export function ProductsScreen({ product }: ProductsScreenProps) {
  const [amountSelected, setAmountSelected] = useState(0)
  const [options, setOptions] = useState<number[]>([])
  const { title, description, miniature } = product

  useEffect(() => {
    const data: number[] = []

    for (let i = 1; i <= 30; i++) {
      data.push(i)
    }

    setOptions(data)
  }, [])

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
            <select>
              {options.map((num, index) => {
                return <option key={index} value={num}>{num}</option>
              })}
            </select>
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
