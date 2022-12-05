import { IProduct } from '../../@types/products'

export enum StoreActionsType {
    FETCH_DATA = 'FETCH_DATA',
    INCREASE_AMOUNT_SELECTED = 'INCREASE_AMOUNT_SELECTED',
    DECREASE_AMOUNT_SELECTED = 'DECREASE_AMOUNT_SELECTED',
    SEND_PRODUCT_TO_CHECKOUT = 'SEND_PRODUCT_TO_CHECKOUT',
    REMOVE_PRODUCT_FROM_CHECKOUT = 'REMOVE_PRODUCT_FROM_CHECKOUT',
    HANDLE_ERROR = 'HANDLE_ERROR',
    FINISH_LOADING = 'FINISH_LOADING',
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

export function sendProductToCheckout(id: string){
  return {
    type: StoreActionsType.SEND_PRODUCT_TO_CHECKOUT,
    payload: {
      id
    }
  }
}

export function removeProductFromCheckout(id: string){
  return {
    type: StoreActionsType.REMOVE_PRODUCT_FROM_CHECKOUT,
    payload: {
      id
    }
  }
}

export function handleError(error:any){
  return {
    type: StoreActionsType.HANDLE_ERROR,
    payload: {
      error
    }
  }
}

export function finishLoading(){
  return {
    type: StoreActionsType.FINISH_LOADING,
  }
}
