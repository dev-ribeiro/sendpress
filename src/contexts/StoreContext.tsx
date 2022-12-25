import {
  createContext,
  ReactNode,
  useState
} from 'react'

export interface CheckoutProduct {
  slug: string
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
  increaseUnityAmountSelected: (product: CheckoutProduct) => void
  decreaseUnityAmountSelected: (product: CheckoutProduct) => void
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
      return product.slug !== item.slug
    })

    setCheckout(deletedItem)
  }

  function updateAmountSelected(product: CheckoutProduct) {
    const checkoutWithUpdateOfTargetItem = checkout.map(item => {
      if(item.slug === product.slug) {
        return {
          ...item,
          amountSelected: product.amountSelected
        }
      }

      return item
    })

    setCheckout(checkoutWithUpdateOfTargetItem)
  }

  function increaseUnityAmountSelected(product:CheckoutProduct) {
    const checkoutWithUpdateOfTargetItem = checkout.map(item => {
      if(item.slug === product.slug) {
        return {
          ...item,
          amountSelected: product.amountSelected + 1
        }
      }

      return item
    })

    setCheckout(checkoutWithUpdateOfTargetItem)
  }

  function decreaseUnityAmountSelected(product:CheckoutProduct) {
    const checkoutWithUpdateOfTargetItem = checkout.map(item => {
      if(item.slug === product.slug && item.amountSelected > 1) {
        return {
          ...item,
          amountSelected: product.amountSelected - 1
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
      updateAmountSelected,
      increaseUnityAmountSelected,
      decreaseUnityAmountSelected
    }}>
      {children}
    </StoreContext.Provider>
  )
}
