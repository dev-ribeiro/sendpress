import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeScreen } from '../screens/Home'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seja-bem vindo a Sendpress</title>
      </Head>
      <Header />
      <HomeScreen />
    </>
  )
}

export default Home
