import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { ProductsScreen } from '../../components/Products'

export default function Products() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <ProductsScreen pid={pid!}/>
  )
}
