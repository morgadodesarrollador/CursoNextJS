// import { Button } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts/index';
import { PokemonsListResponse } from '../interfaces/pokemons-list';

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title='Listado de Pokemons'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>...</li>
      </ul>
    </Layout>
  )
}
/*  se usa cuando la data requerida está disponible en build time . Se hace el yarn build() y se llama a GetStaticProps
(tiempo de construcción de la aplicación). Se renderiza antes de hacer
el request de la página
*/
export const getStaticProps: GetStaticProps = async(ctx) => {
  // const { data } = await
  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151');
  console.log( data );
  return { 
    props: {
      pokemons: data.results //hemos de crear la interface y definir un tipo estricto
    }
  }
}
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default HomePage
