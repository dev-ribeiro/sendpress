import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../@types/products'
import { db } from '../../config/firebase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.DEVELOPMENT_MODE === 'enabled') {
    const developmentData = await axios.get('http://localhost:3333/data')

    return res.status(200).json(developmentData.data[0])
  } else {
    const querySnapshot = await getDocs(collection(db, 'store'))
    const storeData:any = []
    querySnapshot.forEach(doc => {
      storeData.push(doc.data())
    })

    return res.status(200).json(storeData)
  }
}
