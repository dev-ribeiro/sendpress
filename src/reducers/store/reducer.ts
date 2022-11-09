import { IProduct } from '../../@types/products'

interface IStoreState {
  store: IProduct[]
}

export function StoreReducer(state: IStoreState, actions: any) {
  switch (actions.type) {
  case 'FETCH_DATA':
    return {
      store: actions.payload.store
    }

  default:
    return state
  }
}
