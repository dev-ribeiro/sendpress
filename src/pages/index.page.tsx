import { v4 as uuidv4 } from 'uuid'
import { getDocs, collection } from 'firebase/firestore'
import { GetStaticProps } from 'next'
import { Product } from '../@types/products'
import { db } from '../lib/firebase'
import axios from 'axios'

export { default } from './home'

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.DEVELOPMENT_MODE === 'enabled') {
    const response = await axios.get('http://localhost:14000/data')
    const handleStoreData: Product[] = response.data.map((product: any) => {
      return {
        ...product,
        id: uuidv4(),
        amountSelected: 0,
        isCheckoutCart: false,
      }
    })

    return {
      props: {
        store: handleStoreData
      }
    }
  }

  const querySnapshot = await getDocs(collection(db, 'store'))
  const storeData: any = []
  querySnapshot.forEach(doc => {
    storeData.push(doc.data())
  })

  const handleStoreData: Product[] = storeData.map((product: Product) => {
    return {
      ...product,
      id: uuidv4(),
      amountSelected: 0,
      isCheckoutCart: false,
    }
  })

  return {
    props: {
      store: handleStoreData
    },
    revalidate: 60 * 60 * 1,
  }
}
