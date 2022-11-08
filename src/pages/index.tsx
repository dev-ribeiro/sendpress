import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeScreen } from '../components/HomeScreen'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Seja-bem vindo a Sendpress</title>
      </Head>
      <Header />
      <HomeScreen />
    </div>
  )
}

export default Home
