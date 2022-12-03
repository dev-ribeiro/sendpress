import Image from 'next/image'
import { HomeContainer } from './styles'
import banner from '../../assets/banner.png'
import { ProductStore } from './components/ProductStore'
import { BriefStore } from './components/BriefStore'

export function HomeScreen() {

  return (
    <HomeContainer>
      <Image src={banner} alt="" />
      <ProductStore />
      <BriefStore />
    </HomeContainer>
  )
}
