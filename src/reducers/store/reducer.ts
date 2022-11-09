import { IProduct } from '../../@types/products'

interface IStoreState {
    store: IProduct[]
  }

export function StoreReducer(state: IStoreState, actions: any) {
  switch (actions.type) {
  default:
    return state
  }
}
