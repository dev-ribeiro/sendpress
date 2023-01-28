import { useState } from 'react'

type FilterValuesType = 'todos' | 'chaveiros' | 'acessórios' | 'escritório' | 'outros' | 'papercraft'

export function useFilterProducts() {
  const [filter, setFilter] = useState<FilterValuesType>('todos')

  function handleFilterProduct(desiredFilter: FilterValuesType) {
    if(!desiredFilter || desiredFilter === 'todos') {
      return filter
    }

    setFilter(desiredFilter)
  }

  return {
    filter,
    handleFilterProduct
  }
}
