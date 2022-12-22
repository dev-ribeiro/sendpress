import { useEffect, useState } from 'react'

export function useCreateNumberOption() {
  const [options, setOptions] = useState<number[]>([])

  useEffect(() => {
    const data: number[] = []

    for (let i = 1; i <= 30; i++) {
      data.push(i)
    }

    setOptions(data)
  }, [])

  return {
    options
  }
}
