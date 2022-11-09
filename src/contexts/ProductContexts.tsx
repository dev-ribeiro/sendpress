import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { IProduct } from '../@types/products'
import { StoreReducer } from '../reducers/store/reducer'
import { fetchData } from '../reducers/store/actions'


interface IProductContext {
  store: IProduct[]
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
            amountSelected: 0,
            id: uuidv4()
          }
        })
        dispatch(fetchData(handleStoreData))
      })
  }, [])

  const { store } = storeState

  return (
    <ProductContext.Provider value={{
      store,
    }}>
      {children}
    </ProductContext.Provider>
  )
}
