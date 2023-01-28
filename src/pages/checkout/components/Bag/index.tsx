import { useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { Item } from '../Item'
import {
  ShoppingBagContainer,
  SelectedItemsContainer,
  HeaderContainer,
} from './styles'

export function Bag() {
  const { checkout } = useContext(StoreContext)

  return (
    <ShoppingBagContainer>
      <HeaderContainer>
        <h2>Produto</h2>
        <h2>Qntde.</h2>
        <h2>Subtotal</h2>
      </HeaderContainer>
      <SelectedItemsContainer>
        {checkout.map(product => {
          return (
            <Item key={product.slug} {...product} />
          )
        })}

      </SelectedItemsContainer>
    </ShoppingBagContainer>
  )
}
