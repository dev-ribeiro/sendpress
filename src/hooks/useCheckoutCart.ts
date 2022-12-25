import React, { ChangeEvent, useContext, useState } from 'react'
import { CheckoutProduct, StoreContext } from '../contexts/StoreContext'
import { whatsappNumber } from '../utils/contactList'
import { priceFormatter } from '../utils/formatter'

export function useCheckoutCart() {
  const {
    checkout,
    addItemToChekout,
    removeItemFromChekout,
    updateAmountSelected,
    increaseUnityAmountSelected,
    decreaseUnityAmountSelected
  } = useContext(StoreContext)
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
      return product.slug === selectedProduct.slug
    })

    if (!isProductInCheckout) {
      addItemToChekout(selectedProduct)
    } else {
      updateAmountSelected(selectedProduct)
    }
  }

  function handleRemoveProductFromCart(slug: string) {
    const itemWillBeDeleted = checkout.find(product => product.slug === slug)

    removeItemFromChekout(itemWillBeDeleted!)
  }

  function handleIncreaseUnityAmountSelected(event:React.MouseEvent<HTMLButtonElement>) {
    const slug = event.currentTarget.className
    const product = checkout.find(product => product.slug === slug)

    increaseUnityAmountSelected(product!)
  }

  function handleDecreaseUnityAmountSelected(event:React.MouseEvent<HTMLButtonElement>) {
    const slug = event.currentTarget.className
    const product = checkout.find(product => product.slug === slug)

    decreaseUnityAmountSelected(product!)
  }

  const bill = checkout.reduce((acc, product) => {
    return acc += product.amountSelected * product.price
  }, 0)

  const orderToMessage = checkout.map(product => `(${product.amountSelected}) --- ${product.title}`)
  const clientMessage = `https://wa.me/+55${whatsappNumber}?text=Olá, gostaria de fazer um pedido: ${orderToMessage.join(', ')}. O valor do pedido é ${priceFormatter.format(bill)} mais o valor da entrega a combinar.`

  return {
    selectedProduct,
    bill,
    clientMessage,
    loadProduct,
    handleAmountSelected,
    handleSendToCart,
    handleRemoveProductFromCart,
    handleIncreaseUnityAmountSelected,
    handleDecreaseUnityAmountSelected
  }
}
