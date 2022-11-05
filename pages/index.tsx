import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { HomeScreen } from '../components/HomeScreen'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
    </div>
  )
}

export default Home
