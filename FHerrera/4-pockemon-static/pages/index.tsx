// import { Button } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts/index';

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
/*  se usa cuando la data requerida está disponible en build time 
(tiempo de construcción de la aplicación). Se renderiza antes de hacer
el request de la página
*/
export const getStaticProps: GetStaticProps = async(ctx) => {
  // const { data } = await
  console.log('Hola Mundo');
  return { 
    props: {
      name: 'Morgado'
    }
  }
}
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default HomePage
