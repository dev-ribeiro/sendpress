import { IProduct } from '../../@types/products'

export enum StoreActionsType {
    FETCH_DATA = 'FETCH_DATA',
    INCREASE_AMOUNT_SELECTED = 'INCREASE_AMOUNT_SELECTED',
    DECREASE_AMOUNT_SELECTED = 'DECREASE_AMOUNT_SELECTED'
}

export function fetchData(data:IProduct[]){
  return {
    type: StoreActionsType.FETCH_DATA,
    payload: {
      store: data
    }
  }
}

export function increaseAmountSelected(id: string){
  return {
    type: StoreActionsType.INCREASE_AMOUNT_SELECTED,
    payload:{
      id
    }
  }
}

export function decreaseAmountSelected(id: string){
  return {
    type: StoreActionsType.DECREASE_AMOUNT_SELECTED,
    payload:{
      id
    }
  }
}
