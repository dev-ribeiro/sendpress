/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { Product } from '../../../../@types/products'
import { StoreContext } from '../../../../contexts/StoreContext'
import { useCheckoutCart } from '../../../../hooks/useCheckoutCart'
import { useCreateNumberOption } from '../../../../hooks/useCreateNumberOptions'
import { priceFormatter } from '../../../../utils/formatter'
import {
  PriceProductWrapper,
  ProductImageWrapper,
  ProductItemContainer,
  ProductsCategoriesWrapper,
  UserInteractionsContainer
} from './styles'

export function Item({
  title,
  categories,
  price,
  miniature,
  slug,
}: Product) {
  const { options } = useCreateNumberOption()
  const { selectedProduct, handleAmountSelected, handleSendToCart, loadProduct } = useCheckoutCart()

  useEffect(() => {
    loadProduct({
      slug,
      title,
      price,
      miniature,
      amountSelected: 1,
    })
  }, [])

  return (
    <ProductItemContainer>
      <Link href={`/products/${slug}`} prefetch={false}>
        <ProductImageWrapper>
          <Image
            src={miniature}
            alt=""
            width={150}
            height={150}
          />
        </ProductImageWrapper>
        <h3>{title}</h3>
      </Link>
      <ProductsCategoriesWrapper>
        <span>{categories}</span>
      </ProductsCategoriesWrapper>
      <PriceProductWrapper>
        <strong>{priceFormatter.format(price)}</strong>
        <UserInteractionsContainer>
          <select
            value={selectedProduct.amountSelected}
            onChange={handleAmountSelected}
          >
            {options.map((number, key) => {
              return (
                <option key={key} value={number}>{number}</option>
              )
            })}
          </select>
          <button onClick={handleSendToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </UserInteractionsContainer>
      </PriceProductWrapper>
    </ProductItemContainer>
  )
}
