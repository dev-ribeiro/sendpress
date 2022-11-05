import Image from 'next/image'
import { HomeContainer } from './styles'
import banner from '../../assets/banner.jpg'
import { ProductStore } from './components/ProductStore'

export function HomeScreen() {
  return (
    <HomeContainer>
      <Image src={banner} alt="" title="Credits: Gradienta - Unsplash" width={500} height={500} />
      <ProductStore />
    </HomeContainer>
  )
}
