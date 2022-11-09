import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { IProduct } from '../@types/products'
import { useFetch } from '../hooks/useFetch'
import { StoreReducer } from '../reducers/store/reducer'


interface IProductContext {
  store: IProduct[]
}

export const ProductContext = createContext({} as IProductContext)

interface IProductContextProvider {
  children: ReactNode
}

export function ProductContextProvider({ children }: IProductContextProvider) {
  const { storeData } = useFetch()
  const [storeState, dispatch] = useReducer(StoreReducer,{
    store: storeData.map(product => product)
  })

  const {store} = storeState
  console.log(store)

  return (
    <ProductContext.Provider value={{
      store,
    }}>
      {children}
    </ProductContext.Provider>
  )
}
