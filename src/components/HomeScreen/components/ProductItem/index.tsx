import Image from 'next/image'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { IProduct } from '../../../../@types/products'
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
  imagePath,
  amountSelected
}: IProduct) {
  const { addItem, removeItem } = useContext(ProductContext)

  function onAddItem(){
    addItem(id)
  }

  function onRemoveItem(){
    removeItem(id)
  }

  return (
    <ProductItemContainer>
      <ProductImageWrapper />
      <h3>{title}</h3>
      <ProductsCategoriesWrapper>
        {categories.map((category, index) => {
          return (
            <span key={index}>{category}</span>
          )
        })}
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
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </UserInteractionsContainer>
      </PriceProductWrapper>
    </ProductItemContainer>
  )
}
