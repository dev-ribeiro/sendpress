/* eslint-disable react-hooks/exhaustive-deps */
import { async } from '@firebase/util'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useContext, useEffect, useState } from 'react'
import { IProduct } from '../../@types/products'
import { ProductsScreen } from '../../components/Products'
import { ProductContext } from '../../contexts/ProductContexts'

interface ProductsProps {
  query: {
    slug: string
  }
}

export default function Products({ query }: ProductsProps) {

  return (
    <ProductsScreen slug={query.slug} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = params

  return {
    props: {
      query
    }
  }
}
