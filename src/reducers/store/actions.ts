import { IProduct } from '../../@types/products'

export enum StoreActionsType {
    FETCH_DATA = 'FETCH_DATA'
}

export function fetchData(data:IProduct[]){
  return {
    type: StoreActionsType.FETCH_DATA,
    payload: {
      store: data
    }
  }
}
