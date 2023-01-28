import { useCheckoutCart } from '../../../../hooks/useCheckoutCart'
import { priceFormatter } from '../../../../utils/formatter'
import { FinishOrderButton, Order, OrderSummaryContainer } from './styles'

export function Summary() {
  const { bill, clientMessage } = useCheckoutCart()

  return (
    <OrderSummaryContainer>
      <h3>Resumo do pedido</h3>
      <Order>
        <div>
          <span>Total do pedido</span>
          <span>{priceFormatter.format(bill)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>A combinar</span>
        </div>
        <div>
          <h3>Total</h3>
          <h3>{priceFormatter.format(bill)}</h3>
        </div>
      </Order>
      <FinishOrderButton href={clientMessage} target="_blank">
        FECHAR PEDIDO
      </FinishOrderButton>
    </OrderSummaryContainer>
  )
}
