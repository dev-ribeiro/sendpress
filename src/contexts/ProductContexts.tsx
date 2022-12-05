import {
  createContext,
  ReactNode,
  useReducer
} from 'react'
import { IProduct } from '../@types/products'
import { StoreReducer } from '../reducers/store/reducer'
import {
  decreaseAmountSelected,
  fetchData,
  finishLoading,
  handleError,
  increaseAmountSelected,
  removeProductFromCheckout,
  sendProductToCheckout
} from '../reducers/store/actions'


interface IProductContext {
  store: IProduct[]
  error: any
  loading: boolean
  createInitialData: (data: IProduct[]) => void
  processError: (error: any) => void
  addItem: (id: string) => void
  removeItem: (id: string) => void
  handleSendProductToCheckoutCart: (id: string) => void
  handleRemoveProductFromCheckoutCart: (id: string) => void
}

export const ProductContext = createContext({} as IProductContext)

interface IProductContextProvider {
  children: ReactNode
}

const initialState = {
  store: [],
  error: {},
  loading: true
}

export function ProductContextProvider({ children }: IProductContextProvider) {
  const [storeState, dispatch] = useReducer(StoreReducer, initialState)

  function createInitialData(data: IProduct[]) {
    dispatch(fetchData(data))
    dispatch(finishLoading())
  }

  function processError(error: any) {
    dispatch(handleError(error))
  }

  function addItem(id: string) {
    dispatch(increaseAmountSelected(id))
  }

  function removeItem(id: string) {
    dispatch(decreaseAmountSelected(id))
  }

  function handleSendProductToCheckoutCart(id: string) {
    dispatch(sendProductToCheckout(id))
  }

  function handleRemoveProductFromCheckoutCart(id: string) {
    dispatch(removeProductFromCheckout(id))
  }

  const { store, error, loading } = storeState

  return (
    <ProductContext.Provider value={{
      store,
      error,
      loading,
      createInitialData,
      processError,
      addItem,
      removeItem,
      handleSendProductToCheckoutCart,
      handleRemoveProductFromCheckoutCart,
    }}>
      {children}
    </ProductContext.Provider>
  )
}
