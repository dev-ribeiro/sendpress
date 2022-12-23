import {
  createContext,
  ReactNode,
  useState
} from 'react'

export interface CheckoutProduct {
  id: string
  title: string
  price: number
  miniature: string
  amountSelected: number
}

interface StoreContextType {
  checkout: CheckoutProduct[]
  addItemToChekout: (product: CheckoutProduct) => void
  removeItemFromChekout: (product: CheckoutProduct) => void
  updateAmountSelected: (product: CheckoutProduct) => void
}

export const StoreContext = createContext({} as StoreContextType)

interface ProductContextProvider {
  children: ReactNode
}

export function ProductContextProvider({ children }: ProductContextProvider) {
  const [checkout, setCheckout] = useState<CheckoutProduct[]>([])

  function addItemToChekout(product: CheckoutProduct) {
    setCheckout(state => {
      return [...state, product]
    })
  }

  function removeItemFromChekout(product: CheckoutProduct) {
    const deletedItem = checkout.filter(item => {
      return product.id !== item.id
    })

    setCheckout(deletedItem)
  }

  function updateAmountSelected(product: CheckoutProduct) {
    const checkoutWithUpdateOfTargetItem = checkout.map(item => {
      if(item.id === product.id) {
        return {
          ...item,
          amountSelected: product.amountSelected
        }
      }

      return item
    })

    setCheckout(checkoutWithUpdateOfTargetItem)
  }

  return (
    <StoreContext.Provider value={{
      checkout,
      addItemToChekout,
      removeItemFromChekout,
      updateAmountSelected
    }}>
      {children}
    </StoreContext.Provider>
  )
}
