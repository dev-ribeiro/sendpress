import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../contexts/ProductContexts'

export function useCheckout() {
  const [checkoutCart, setCheckoutCart] = useState<any[]>([])
  const { store } = useContext(ProductContext)

  useEffect(()=>{
    const filteredItems = store.filter(product => {
      return product.isCheckoutCart === true
    })

    setCheckoutCart(filteredItems)
  },[store])

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
