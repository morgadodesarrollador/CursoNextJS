import { useRouter } from 'next/router';
import React from 'react'
import { Layout } from '../../components/layouts'

const PokemonPage = () => {
  const router = useRouter();
  console.log (router.query);
  return (
    <Layout title='algun pokemon ...'>
        <h1>Hola Mundo</h1>
    </Layout>
  )
}

export default PokemonPage;