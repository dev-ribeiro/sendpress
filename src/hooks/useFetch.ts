import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProduct } from '../@types/products'

export function useFetch() {
  const [storeData, setStoreData] = useState<IProduct[]>([])

  async function fetchData() {
    const url = window.location.href + 'api/store'
    const response = await axios.get(url)
    const data: IProduct[] = response.data

    setStoreData(data.map(product => {
      return {
        ...product,
        amountSelected: 0,
        id: uuidv4()
      }
    }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    storeData
  }
}
