import { useCheckout } from '../../../hooks/useCheckout'
import { CheckoutItem } from '../CheckoutItem'
import {
  ShoppingBagContainer,
  SelectedItemsContainer,
  HeaderContainer,
} from './styles'

export function ShoppingBag() {
  const { checkoutCart } = useCheckout()

  return (
    <ShoppingBagContainer>
      <HeaderContainer>
        <h2>Produto</h2>
        <h2>Qntde.</h2>
        <h2>Subtotal</h2>
      </HeaderContainer>
      <SelectedItemsContainer>
        {checkoutCart.map(product => {
          return (
            <CheckoutItem key={product.id} {...product} />
          )
        })}

      </SelectedItemsContainer>
    </ShoppingBagContainer>
  )
}
