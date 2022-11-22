import { OrderSummary } from './OrderSummary'
import { ShoppingBag } from './ShoppingBag'
import { CheckoutScreenContainer } from './styles'

export function CheckoutScreen() {
  return (
    <CheckoutScreenContainer>
      <ShoppingBag />
      <OrderSummary />
    </CheckoutScreenContainer>
  )
}
