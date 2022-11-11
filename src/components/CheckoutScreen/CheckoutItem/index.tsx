import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { IProduct } from '../../../@types/products'
import { ProductContext } from '../../../contexts/ProductContexts'
import { priceFormatter } from '../../../utils/formatter'
import { CheckoutItemContainer, CheckoutItemHeader, UserCheckoutActionsContainer } from './styles'

export function CheckoutItem({
  id,
  title,
  amountSelected,
  price,
}:IProduct){
  const {addItem, removeItem, handleRemoveProductFromCheckoutCart} = useContext(ProductContext)

  function onAddItem(){
    addItem(id)
  }

  function onRemoveItem(){
    removeItem(id)
  }

  function onRemoveFromCheckoutCart(){
    handleRemoveProductFromCheckoutCart(id)
  }

  return (
    <CheckoutItemContainer>
      <CheckoutItemHeader>
        <div className='fakeImage'></div>
        <span>{title}</span>
      </CheckoutItemHeader>
      <UserCheckoutActionsContainer>
        <div>
          <button onClick={onAddItem}>
            <Plus size={14} />
          </button>
          <span>{amountSelected}</span>
          <button onClick={onRemoveItem}>
            <Minus size={14} />
          </button>
        </div>
        <button onClick={onRemoveFromCheckoutCart}>REMOVER</button>
      </UserCheckoutActionsContainer>
      <h3>{priceFormatter.format(price * amountSelected)}</h3>
    </CheckoutItemContainer>
  )
}
