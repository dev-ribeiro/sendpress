import { useState } from 'react'

type FilterValuesType = 'todos' | 'chaveiros' | 'acessórios' | 'escritório' | 'outros' | 'papercraft'

export function useFilterProducts() {
  const [filter, setFilter] = useState<FilterValuesType>('todos')

  function handleFilterProduct(desiredFilter: FilterValuesType) {
    setFilter(desiredFilter)
  }

  return {
    filter,
    handleFilterProduct
  }
}
