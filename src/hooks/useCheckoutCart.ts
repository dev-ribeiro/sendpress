import { ChangeEvent, useContext, useState } from 'react'
import { CheckoutProduct, StoreContext } from '../contexts/StoreContext'

export function useCheckoutCart() {
  const { checkout, addItemToChekout, updateAmountSelected } = useContext(StoreContext)
  const [selectedProduct, setSelectedProduct] = useState({} as CheckoutProduct)

  function loadProduct(product: CheckoutProduct) {
    setSelectedProduct(product)
  }

  function handleAmountSelected(event: ChangeEvent) {
    const target = event.target as HTMLSelectElement
    setSelectedProduct(state => {
      return {
        ...state,
        amountSelected: parseInt(target.value)
      }
    })
  }

  function handleSendToCart() {
    const isProductInCheckout = checkout.find(product => {
      return product.id === selectedProduct.id
    })

    if (!isProductInCheckout) {
      addItemToChekout(selectedProduct)
    } else {
      updateAmountSelected(selectedProduct)
    }
  }

  return {
    selectedProduct,
    handleAmountSelected,
    handleSendToCart,
    loadProduct
  }
}
