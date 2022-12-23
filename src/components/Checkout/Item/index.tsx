import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react'
import { Product } from '../../../@types/products'
import { priceFormatter } from '../../../utils/formatter'
import { CheckoutItemContainer, CheckoutItemHeader, ImageWrapper, UserCheckoutActionsContainer } from './styles'

interface CheckoutItemProps {
  title: string
  amountSelected: number
  price: number
  miniature: string
}

export function Item({
  title,
  amountSelected,
  price,
  miniature
}: CheckoutItemProps) {

  function onAddItem() {
    console.log('')
  }

  function onRemoveItem() {
    console.log('')
  }

  function onRemoveFromCheckoutCart() {
    console.log('')
  }

  return (
    <CheckoutItemContainer>
      <CheckoutItemHeader>
        <ImageWrapper>
          <Image
            src={miniature}
            alt=""
            width={50}
            height={50}
          />
        </ImageWrapper>
        <span>{title}</span>
      </CheckoutItemHeader>
      <UserCheckoutActionsContainer>
        <div>
          <button onClick={onAddItem}>
            <Plus size={14} />
          </button>
          <span>{amountSelected}</span>
          <button onClick={onRemoveItem}>
            <Minus size={14} />
          </button>
        </div>
        <button onClick={onRemoveFromCheckoutCart}>REMOVER</button>
      </UserCheckoutActionsContainer>
      <h3>{priceFormatter.format(price * amountSelected)}</h3>
    </CheckoutItemContainer>
  )
}
