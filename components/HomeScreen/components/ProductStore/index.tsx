import { Books, List, Package, Paperclip, SketchLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoriesWrapper, FormProductContainer, ProductStoreContainer, StoreContainer } from './styles'
import { ProductItem } from '../ProductItem'
import { IProduct } from '../../../../@types/products'

export function ProductStore() {
  const [store, setStore] = useState<IProduct[]>([])

  async function loadInitialData() {
    const response = await axios.get(`${window.location.href}api/store`)
    const data:IProduct[] = response.data[0]
    data.map((product) => {
      return {
        ...product,
        amountSelected: 0
      }
    })

    setStore(data)
  }

  useEffect(()=>{
    loadInitialData()
  },[])

  return (
    <ProductStoreContainer>
      <FormProductContainer>
        <h2>CATEGORIAS</h2>
        <CategoriesWrapper>
          <button>
            <List size={32} />
            <h3>TODOS</h3>
          </button>
          <button>
            <Books size={32} />
            <h3>LIVROS E MANGÁS</h3>
          </button>
          <button>
            <Paperclip size={32} />
            <h3>ESCRITÓRIOS</h3>
          </button>
          <button>
            <SketchLogo size={32} />
            <h3>ACESSÓRIOS</h3>
          </button>
          <button>
            <Package size={32} />
            <h3>OUTROS</h3>
          </button>
        </CategoriesWrapper>
      </FormProductContainer>
      <StoreContainer>
        {store.map((product, index) => {
          return (
            <ProductItem key={index} {...product} />
          )
        })}
      </StoreContainer>
    </ProductStoreContainer>
  )
}
