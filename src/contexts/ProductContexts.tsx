import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { IProduct } from '../@types/products'
import { StoreReducer } from '../reducers/store/reducer'
import { decreaseAmountSelected, fetchData, increaseAmountSelected, sendProductToCheckout } from '../reducers/store/actions'


interface IProductContext {
  store: IProduct[]
  addItem: (id:string) => void
  removeItem: (id:string) => void
  handleSendProductToCheckoutCart: (id:string) => void
}

export const ProductContext = createContext({} as IProductContext)

interface IProductContextProvider {
  children: ReactNode
}

const initialState = {
  store: []
}

export function ProductContextProvider({ children }: IProductContextProvider) {
  const [storeState, dispatch] = useReducer(StoreReducer, initialState)

  useEffect(() => {
    const url = window.location.href + 'api/store'
    axios
      .get(url)
      .then(response => {
        const storeData: IProduct[] = response.data
        const handleStoreData = storeData.map(product => {
          return {
            ...product,
            id: uuidv4(),
            amountSelected: 0,
            isCheckoutCart: false,
          }
        })
        dispatch(fetchData(handleStoreData))
      })
  }, [])

  function addItem(id:string){
    dispatch(increaseAmountSelected(id))
  }

  function removeItem(id:string){
    dispatch(decreaseAmountSelected(id))
  }

  function handleSendProductToCheckoutCart(id:string){
    dispatch(sendProductToCheckout(id))
  }

  const { store } = storeState

  return (
    <ProductContext.Provider value={{
      store,
      addItem,
      removeItem,
      handleSendProductToCheckoutCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}
