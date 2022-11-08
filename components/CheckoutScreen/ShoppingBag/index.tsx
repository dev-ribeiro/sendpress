import { Minus, Plus } from 'phosphor-react'
import {
  ShoppingBagContainer,
  SelectedItemsContainer,
  HeaderContainer,
  UserCheckoutActionsContainer
} from './styles'

export function ShoppingBag(){
  return (
    <ShoppingBagContainer>
      <HeaderContainer>
        <h2>Produto</h2>
        <h2>Qntde.</h2>
        <h2>Subtotal</h2>
      </HeaderContainer>
      <SelectedItemsContainer>
        <div>
          <div className='fakeImage'></div>
          <span>NOME DO PRODUTO</span>
        </div>
        <UserCheckoutActionsContainer>
          <div>
            <button>
              <Plus size={14} />
            </button>
            <span>0</span>
            <button>
              <Minus size={14} />
            </button>
          </div>
          <button>REMOVER</button>
        </UserCheckoutActionsContainer>
        <h3>R$ 50,00</h3>
      </SelectedItemsContainer>
    </ShoppingBagContainer>
  )
}
