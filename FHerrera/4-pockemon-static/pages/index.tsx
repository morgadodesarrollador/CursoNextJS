// import { Button } from '@nextui-org/react'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts/index';
import { PokemonCard } from '../components/pokemons';
import { PokemonsListResponse, SmallPokemon } from '../interfaces/pokemons-list';

interface Props {
  pokemons: SmallPokemon[];
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg ← ID

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map ( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
      }
      </Grid.Container>
    </Layout>
  )
}
/*  se usa cuando la data requerida está disponible en build time . Se hace el yarn build() y se llama a GetStaticProps
(tiempo de construcción de la aplicación). Se renderiza antes de hacer
el request de la página
*/
export const getStaticProps: GetStaticProps = async(ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151');
  console.log( data );

  // la idea es devolver un array con id, nombre, imagen y url
  //map regresa un nuevo array con el retorno de la funcion de flecha que hay dentro
  // ({ ... }) --> el () es para hacer implícito el return del objeto que devuelve la función
  const pokemons: SmallPokemon[] = data.results.map( (poke, idx) => ({ 
    ...poke, //destructuramos el objeto (name y url)
    id: idx + 1, 
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`
  })); 
  
  return { 
    props: {
      // pokemons: data.results //lo que devuelve la API
      pokemons: pokemons 
    }
  }
}
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
export default HomePage
