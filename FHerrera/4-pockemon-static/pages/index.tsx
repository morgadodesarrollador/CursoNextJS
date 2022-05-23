import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts/index';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de Pokemons'>
      <Button color="success"> Hola Mundo</Button>
    </Layout>
  )
}

export default HomePage
