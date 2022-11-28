import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../config/firebase'

export interface ProductType {
  productId?: string
  title: string
  price: number
  categories: string
  imagePath: string
  id: string
  amountSelected: number
  isCheckoutCart: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.DEVELOPMENT_MODE === 'enabled') {
    const developmentData = await axios.get('http://localhost:3333/data')

    const handleStoreData:ProductType[] = developmentData.data.map((product:ProductType) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    return res.status(200).json(handleStoreData)
  } else {
    const querySnapshot = await getDocs(collection(db, 'store'))
    const storeData:any = []
    querySnapshot.forEach(doc => {
      storeData.push(doc.data())
    })

    const handleStoreData:ProductType[] = storeData.map((product:ProductType) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    return res.status(200).json(handleStoreData)
  }
}
