import { Key, List, Package, Paperclip, SketchLogo } from 'phosphor-react'
import { CategoriesWrapper, CategoriesContainer, ProductStoreContainer, StoreContainer } from './styles'
import { Item } from '../Item'
import React from 'react'
import { useFilterProducts } from '../../../hooks/useFilterProducts'
import { Product } from '../../../@types/products'

type InputValuesType = 'todos' | 'chaveiros' | 'acessórios' | 'escritório' | 'outros'

interface ProductStoreProps {
  store: Product[]
}

export function ProductStore({ store }: ProductStoreProps) {

  const { filter, handleFilterProduct } = useFilterProducts()

  function onCaptureInputValue(event: React.MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement
    const input = button.querySelector('.input') as HTMLInputElement
    const value = input.value as InputValuesType

    handleFilterProduct(value)
  }

  return (
    <ProductStoreContainer>
      <CategoriesContainer>
        <h2>CATEGORIAS</h2>
        <CategoriesWrapper>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='todos' />
            <List size={32} />
            <h3>TODOS</h3>
          </button>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='papercraft' />
            <Package size={32} />
            <h3>PAPERCRAFT</h3>
          </button>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='acessórios' />
            <SketchLogo size={32} />
            <h3>ACESSÓRIOS</h3>
          </button>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='chaveiros' />
            <Key size={32} />
            <h3>CHAVEIROS</h3>
          </button>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='escritório' />
            <Paperclip size={32} />
            <h3>ESCRITÓRIOS</h3>
          </button>
          <button onClick={onCaptureInputValue}>
            <input type="hidden" className='input' value='outros' />
            <Package size={32} />
            <h3>OUTROS</h3>
          </button>
        </CategoriesWrapper>
      </CategoriesContainer>
      <StoreContainer>
        {
          filter === 'todos' || !filter
            ? store.map(product => {
              return (
                <Item key={product.id} {...product} />
              )
            })
            : store.filter(product => {
              return product.categories == filter
            }).map(product => {
              return (
                <Item key={product.id} {...product} />
              )
            })
        }
      </StoreContainer>
    </ProductStoreContainer>
  )
}
