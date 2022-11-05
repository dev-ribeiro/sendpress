import Image from 'next/image'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { IProduct } from '../../../../reducers/products/reducer'
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
  title,
  categories,
  price,
  imagePath,
  amountSelected
}: IProduct) {
  return (
    <ProductItemContainer>
      <ProductImageWrapper>
      </ProductImageWrapper>
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
            <button>
              <Plus size={16} />
            </button>
            <span>0</span>
            <button>
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
