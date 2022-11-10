import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ProductContext } from '../../../contexts/ProductContexts'
import { priceFormatter } from '../../../utils/formatter'
import {
  ShoppingBagContainer,
  SelectedItemsContainer,
  HeaderContainer,
  UserCheckoutActionsContainer
} from './styles'

export function ShoppingBag() {
  const { store } = useContext(ProductContext)

  const checkoutCart = store.filter(product => {
    return product.isCheckoutCart === true
  })

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
            <div key={product.id}>
              <div>
                <div className='fakeImage'></div>
                <span>{product.title}</span>
              </div>
              <UserCheckoutActionsContainer>
                <div>
                  <button>
                    <Plus size={14} />
                  </button>
                  <span>{product.amountSelected}</span>
                  <button>
                    <Minus size={14} />
                  </button>
                </div>
                <button>REMOVER</button>
              </UserCheckoutActionsContainer>
              <h3>{priceFormatter.format(product.price * product.amountSelected)}</h3>
            </div>
          )
        })}

      </SelectedItemsContainer>
    </ShoppingBagContainer>
  )
}
