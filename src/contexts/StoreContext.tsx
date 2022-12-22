import {
  createContext,
  ReactNode,
  useState
} from 'react'
import { Product } from '../@types/products'


interface StoreContextType {
  checkout: Product[]
}

export const StoreContext = createContext({} as StoreContextType)

interface ProductContextProvider {
  children: ReactNode
}

export function ProductContextProvider({ children }: ProductContextProvider) {
  const [checkout,setCheckout] = useState<Product[]>([])

  return (
    <StoreContext.Provider value={{
      checkout,
    }}>
      {children}
    </StoreContext.Provider>
  )
}
