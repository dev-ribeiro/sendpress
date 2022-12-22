import { whatsappNumber } from '../../../utils/contactList'
import { priceFormatter } from '../../../utils/formatter'
import { FinishOrderButton, Order, OrderSummaryContainer } from './styles'

export function Summary() {
  const totalBill = 100
  const orderMessage = 'test'

  const whatsappMessageURL = `https://wa.me/+55${whatsappNumber}?text=Olá, gostaria de fazer um pedido: ${orderMessage}. O valor do pedido é ${priceFormatter.format(totalBill)} mais o valor da entrega a combinar.`

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
          <span>A combinar</span>
        </div>
        <div>
          <h3>Total</h3>
          <h3>{priceFormatter.format(totalBill)}</h3>
        </div>
      </Order>
      <FinishOrderButton href={whatsappMessageURL} target="_blank">
        FECHAR PEDIDO
      </FinishOrderButton>
    </OrderSummaryContainer>
  )
}
