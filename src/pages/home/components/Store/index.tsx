import { CaretLeft, CaretRight, Key, List, Package, Paperclip, SketchLogo } from 'phosphor-react'
import { CategoriesWrapper, CategoriesContainer, ProductStoreContainer, StoreContainer, PaginationContainer } from './styles'
import { Item } from '../Item'
import React, { useState } from 'react'
import { Product } from '../../../../@types/products'
import { useFilterProducts } from '../../../../hooks/useFilterProducts'


type InputValuesType = 'todos' | 'chaveiros' | 'acessórios' | 'escritório' | 'outros'

interface StoreProps {
  store: Product[]
}

export function Store({ store }: StoreProps) {
  const { filter, handleFilterProduct } = useFilterProducts()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = store.slice(indexOfFirstItem, indexOfLastItem)
  const pageNumbers = Array.from({length: Math.ceil(store.length / itemsPerPage)}, (_, index) => index + 1)

  function handlePageChange(newPage: number) {
    setCurrentPage(newPage)
  }

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
      {(filter === 'todos' || !filter) && (
        <>
          <StoreContainer>
            {currentItems
              .sort((a: any, b: any) => {
                if (a.categories > b.categories) {
                  return 1
                }
                if (a.categories < b.categories) {
                  return -1
                }
                return 0
              })
              .map(product => {
                return (
                  <Item key={product.id} {...product} />
                )
              })}
          </StoreContainer>
          <PaginationContainer>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                // style={{backgroundColor: currentPage === number ? 'lightgray':'white'}}
                disabled={currentPage === number}
              >
                <span>{number}</span>
              </button>
            ))}
          </PaginationContainer>
        </>
      )}
      {filter !== 'todos' && (
        <StoreContainer>
          {store
            .filter(product => {
              return product.categories == filter
            })
            .sort((a: any, b: any) => {
              if (a.title > b.title) {
                return 1
              }
              if (a.title < b.title) {
                return -1
              }
              return 0
            })
            .map(product => {
              return (
                <Item key={product.id} {...product} />
              )
            })}
        </StoreContainer>
      )}
    </ProductStoreContainer>
  )
}
