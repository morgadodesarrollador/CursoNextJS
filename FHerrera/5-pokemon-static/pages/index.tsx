import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonsListResponse, SmallPokemon } from '../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ( { pokemons } ) => {
  
  console.log(pokemons);
  // console.log (props); reser
  return (
    <Layout title='Listad de Reservas'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map( (pokemon) => ( 
            <PokemonCard key={pokemon.id}  pokemon = { pokemon} />
          ))
        }
      </Grid.Container>
  
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here 
  const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=50');
 
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  return {
    props: {
      pokemons: pokemons
    }
  }
}
export default Home;


