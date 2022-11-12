import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContexts'

export function useCheckout() {
  const { store } = useContext(ProductContext)

  const checkoutCart = store.filter(product => {
    return product.isCheckoutCart === true
  })

  const totalBill = checkoutCart.reduce((acc,product)=>{
    return acc += (product.price * product.amountSelected)
  },0)

  const orderMessage = checkoutCart.map(product => {
    return `(${product.amountSelected}) --- ${product.title}`
  }).join(',')

  return {
    checkoutCart,
    totalBill,
    orderMessage
  }
}
