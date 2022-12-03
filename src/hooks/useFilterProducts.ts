import { useState } from 'react'

type FilterValuesType = 'todos' | 'chaveiros' | 'acessórios' | 'escritório' | 'outros' | 'papercraft'

export function useFilterProducts() {
  const [filter, setFilter] = useState<FilterValuesType>('todos')

  function handleFilterProduct(desiredFilter: FilterValuesType) {
    switch (desiredFilter) {
    case 'acessórios':
      setFilter('acessórios')
      break
    case 'chaveiros':
      setFilter('chaveiros')
      break
    case 'escritório':
      setFilter('escritório')
      break
    case 'papercraft':
      setFilter('papercraft')
      break
    case 'outros':
      setFilter('outros')
      break
    case 'todos':
      setFilter('todos')
      break
    default:
      return filter
    }
  }

  return {
    filter,
    handleFilterProduct
  }
}
