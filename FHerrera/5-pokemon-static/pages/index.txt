import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonsListResponse, SmallPokemon } from '../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';

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
          pokemons.map( ({ id, img }) => ( 
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card isHoverable isPressable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body css={{ p: 1}}>
                  <Card.Image 
                    src= { img }
                    width= "100%"
                    height= "140px"
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text>{ id }</Text>
                    
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
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
  console.log( data );
  const pokemos: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  return {
    props: {
      pokemos: data
    }
  }
}
export default Home;


