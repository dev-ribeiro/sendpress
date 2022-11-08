import { FinishOrderButton, Order, OrderSummaryContainer } from './styles'

export function OrderSummary(){
  return (
    <OrderSummaryContainer>
      <h3>Resumo do pedido</h3>
      <Order>
        <div>
          <span>Total do pedido</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <h3>Total</h3>
          <h3>R$ 53,50</h3>
        </div>
      </Order>
      <FinishOrderButton>
        FECHAR PEDIDO
      </FinishOrderButton>
    </OrderSummaryContainer>
  )
}
