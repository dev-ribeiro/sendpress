import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Product } from '../../../@types/products'
import { useCreateNumberOption } from '../../../hooks/useCreateNumberOptions'
import { priceFormatter } from '../../../utils/formatter'
import {
  HandleAmountSelectedsWrapper,
  PriceProductWrapper,
  ProductImageWrapper,
  ProductItemContainer,
  ProductsCategoriesWrapper,
  UserInteractionsContainer
} from './styles'

export function Item({
  id,
  title,
  categories,
  price,
  miniature,
  amountSelected,
  slug
}: Product) {
  const { options } = useCreateNumberOption()

  function onAddItem() {
    console.log('add')
  }

  function onRemoveItem() {
    console.log('remove')
  }

  function onSendToCart() {
    console.log('send')
  }

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
          <HandleAmountSelectedsWrapper>
            <select>
              {options.map((number, key) => {
                return (
                  <option key={key} value={number}>{number}</option>
                )
              })}
            </select>
          </HandleAmountSelectedsWrapper>
          <button onClick={onSendToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </UserInteractionsContainer>
      </PriceProductWrapper>
    </ProductItemContainer>
  )
}
