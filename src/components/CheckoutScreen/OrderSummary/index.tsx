import { useCheckout } from '../../../hooks/useCheckout'
import { whatsappNumber } from '../../../utils/contactList'
import { priceFormatter } from '../../../utils/formatter'
import { FinishOrderButton, Order, OrderSummaryContainer } from './styles'

export function OrderSummary() {
  const { totalBill, orderMessage } = useCheckout()
  const whatsappMessageURL = `https://wa.me/${whatsappNumber}?text=Olá, meu pedido é: ${orderMessage}. O valor do pedido é ${priceFormatter.format(totalBill)} mais o valor da entrega a combinar.`

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
      <FinishOrderButton href={whatsappMessageURL} target="_blank">
        FECHAR PEDIDO
      </FinishOrderButton>
    </OrderSummaryContainer>
  )
}
