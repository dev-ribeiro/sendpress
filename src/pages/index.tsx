import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { HomeScreen } from '../components/Home'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Seja-bem vindo a Sendpress</title>
      </Head>
      <HomeScreen />
    </>
  )
}

export default Home
