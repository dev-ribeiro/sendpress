import Image from 'next/image'
import { HomeContainer } from './styles'
import banner from '../../assets/banner.jpg'

export function HomeScreen(){
  return(
    <HomeContainer>
      <Image src={banner} alt="" title="Credits: Gradienta - Unsplash" />
    </HomeContainer>
  )
}
