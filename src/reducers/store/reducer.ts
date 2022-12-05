import { IProduct } from '../../@types/products'
import { StoreActionsType } from './actions'

interface IStoreState {
  store: IProduct[]
  error: any
  loading: boolean
}

export function StoreReducer(state: IStoreState, actions: any) {
  switch (actions.type) {
  case StoreActionsType.FETCH_DATA:
    return {
      ...state,
      store: actions.payload.store
    }

  case StoreActionsType.INCREASE_AMOUNT_SELECTED:
    return {
      ...state,
      store: state.store.map(product => {
        if(product.id === actions.payload.id){
          return {
            ...product,
            amountSelected: product.amountSelected + 1
          }
        }

        return product
      })
    }

  case StoreActionsType.DECREASE_AMOUNT_SELECTED:
    return {
      ...state,
      store: state.store.map(product => {
        if(product.id === actions.payload.id && product.amountSelected > 0){
          return {
            ...product,
            amountSelected: product.amountSelected - 1
          }
        }

        return product
      })
    }

  case StoreActionsType.SEND_PRODUCT_TO_CHECKOUT:
    return {
      ...state,
      store: state.store.map(product => {
        if(product.id === actions.payload.id && product.amountSelected > 0){
          return {
            ...product,
            isCheckoutCart: true
          }
        }

        return product
      })
    }

  case StoreActionsType.REMOVE_PRODUCT_FROM_CHECKOUT:
    return {
      ...state,
      store: state.store.map(product => {
        if(product.id === actions.payload.id){
          return {
            ...product,
            isCheckoutCart: false
          }
        }

        return product
      })
    }

  case StoreActionsType.HANDLE_ERROR:{
    return {
      ...state,
      error: actions.payload.error
    }
  }

  case StoreActionsType.FINISH_LOADING:{
    return {
      ...state,
      loading: false
    }
  }

  default:
    return state
  }
}
