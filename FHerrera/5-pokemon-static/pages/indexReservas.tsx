import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts';
import { reservasApi } from '../api';
import { Reservas } from '../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props{
  reservas: Reservas[]
}

const Home: NextPage<Props> = ( { reservas } ) => {
  
  // console.log (props); reser
  return (
    <Layout title='Listad de Reservas'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          reservas.map( (reserva) => ( 
            <Grid xs={6} sm={3} md={2} xl={1} key={reserva.idReserva}>
              <Card isHoverable isPressable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body css={{ p: 1}}>
                  <Card.Image 
                    src='{ https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg }'
                    width= "100%"
                    height= "140px"
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text>{ reserva.idReserva }</Text>
                    <Text>{ reserva.cliente.nombre }</Text>
                    
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
  const { data } = await reservasApi.get<Reservas>('/reservas');
  console.log( data );
  return {
    props: {
      reservas: data
      
    }
  }
}
export default Home;


