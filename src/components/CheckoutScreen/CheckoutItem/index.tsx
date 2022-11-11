import { Minus, Plus } from 'phosphor-react'
import { IProduct } from '../../../@types/products'
import { priceFormatter } from '../../../utils/formatter'
import { CheckoutItemContainer, CheckoutItemHeader, UserCheckoutActionsContainer } from './styles'

export function CheckoutItem({
  title,
  amountSelected,
  price,
}:IProduct){
  return (
    <CheckoutItemContainer>
      <CheckoutItemHeader>
        <div className='fakeImage'></div>
        <span>{title}</span>
      </CheckoutItemHeader>
      <UserCheckoutActionsContainer>
        <div>
          <button>
            <Plus size={14} />
          </button>
          <span>{amountSelected}</span>
          <button>
            <Minus size={14} />
          </button>
        </div>
        <button>REMOVER</button>
      </UserCheckoutActionsContainer>
      <h3>{priceFormatter.format(price * amountSelected)}</h3>
    </CheckoutItemContainer>
  )
}
