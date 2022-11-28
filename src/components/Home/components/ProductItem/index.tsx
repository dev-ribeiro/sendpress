import Image from 'next/image'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { IProduct } from '../../../../@types/products'
import CustomLink from '../../../../components/CustomLink'
import { ProductContext } from '../../../../contexts/ProductContexts'
import { priceFormatter } from '../../../../utils/formatter'
import {
  HandleAmountSelectedsWrapper,
  PriceProductWrapper,
  ProductImageWrapper,
  ProductItemContainer,
  ProductsCategoriesWrapper,
  UserInteractionsContainer
} from './styles'

export function ProductItem({
  id,
  title,
  categories,
  price,
  miniature,
  amountSelected,
  slug
}: IProduct) {
  const { addItem, removeItem, handleSendProductToCheckoutCart } = useContext(ProductContext)

  function onAddItem(){
    addItem(id)
  }

  function onRemoveItem(){
    removeItem(id)
  }

  function onSendToCart(){
    handleSendProductToCheckoutCart(id)
  }

  return (
    <ProductItemContainer>
      <ProductImageWrapper>
        <CustomLink href={`/products/${slug}`}>
          <Image
            src={miniature}
            alt=""
            width={150}
            height={150}
          />
        </CustomLink>
      </ProductImageWrapper>
      <h3>{title}</h3>
      <ProductsCategoriesWrapper>
        <span>{categories}</span>
      </ProductsCategoriesWrapper>
      <PriceProductWrapper>
        <strong>{priceFormatter.format(price)}</strong>
        <UserInteractionsContainer>
          <HandleAmountSelectedsWrapper>
            <button onClick={onAddItem}>
              <Plus size={16} />
            </button>
            <span>{amountSelected}</span>
            <button onClick={onRemoveItem}>
              <Minus size={16} />
            </button>
          </HandleAmountSelectedsWrapper>
          <button onClick={onSendToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </UserInteractionsContainer>
      </PriceProductWrapper>
    </ProductItemContainer>
  )
}
