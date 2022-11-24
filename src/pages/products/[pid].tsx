import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { ProductsScreen } from '../../screens/Products'

export default function Products() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <Header/>
      <ProductsScreen pid={pid!}/>
    </>
  )
}
