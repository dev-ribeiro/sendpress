import axios from 'axios'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default async function handler(req, res) {
  if(process.env.DEVELOPMENT_MODE === 'enabled') {
    const developmentData = await axios.get('http://localhost:3333/data')

    return res.status(200).json(developmentData.data)
  } else {
    const querySnapshot = await getDocs(collection(db, 'store'))
    const storeData = []
    querySnapshot.forEach(doc => {
      storeData.push(doc.data())
    })

    return res.status(200).json(storeData)
  }
}
