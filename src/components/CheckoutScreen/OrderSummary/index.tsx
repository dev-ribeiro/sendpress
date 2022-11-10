import { useCheckout } from '../../../hooks/useCheckout'
import { priceFormatter } from '../../../utils/formatter'
import { FinishOrderButton, Order, OrderSummaryContainer } from './styles'

export function OrderSummary(){
  const {totalBill} = useCheckout()

  return (
    <OrderSummaryContainer>
      <h3>Resumo do pedido</h3>
      <Order>
        <div>
          <span>Total do pedido</span>
          <span>{priceFormatter.format(totalBill)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <h3>Total</h3>
          <h3>{priceFormatter.format(totalBill + 3.5)}</h3>
        </div>
      </Order>
      <FinishOrderButton>
        FECHAR PEDIDO
      </FinishOrderButton>
    </OrderSummaryContainer>
  )
}
