import { async } from '@firebase/util'
import axios from 'axios'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
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

export const getStaticProps:GetStaticProps = async () => {
  const response = await axios.get('https://sendpress.com.br/api/store')

  console.log(response.data)

  return {
    props: {
      store: response.data
    }
  }
}
