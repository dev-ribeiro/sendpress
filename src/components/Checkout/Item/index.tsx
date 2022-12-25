import Image from 'next/image'
import { Minus, Plus } from 'phosphor-react'
import { useCheckoutCart } from '../../../hooks/useCheckoutCart'
import { priceFormatter } from '../../../utils/formatter'
import { CheckoutItemContainer, CheckoutItemHeader, ImageWrapper, UserCheckoutActionsContainer } from './styles'

interface CheckoutItemProps {
  title: string
  amountSelected: number
  price: number
  miniature: string
  slug: string
}

export function Item({
  title,
  amountSelected,
  price,
  miniature,
  slug
}: CheckoutItemProps) {
  const {
    handleDecreaseUnityAmountSelected,
    handleIncreaseUnityAmountSelected,
    handleRemoveProductFromCart
  } = useCheckoutCart()

  function onRemoveFromCheckoutCart() {
    handleRemoveProductFromCart(slug)
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
          <button
            className={slug}
            onClick={handleIncreaseUnityAmountSelected}
          >
            <Plus size={14} />
          </button>
          <span>{amountSelected}</span>
          <button
            className={slug}
            onClick={handleDecreaseUnityAmountSelected}
          >
            <Minus size={14} />
          </button>
        </div>
        <button onClick={onRemoveFromCheckoutCart}>REMOVER</button>
      </UserCheckoutActionsContainer>
      <h3>{priceFormatter.format(price * amountSelected)}</h3>
    </CheckoutItemContainer>
  )
}
