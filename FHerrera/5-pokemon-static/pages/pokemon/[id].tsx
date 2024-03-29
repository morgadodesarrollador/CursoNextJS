
import { useEffect, useState } from 'react';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { localFavoritos } from '../../utils';

interface Props {
    pokemon: Pokemon;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    //*1-. creamos el estado isInFavoritos                       estado_inicial
    const [isInFavoritos, setisInFavoritos] = useState( localFavoritos.existePokemonINFavoritos(pokemon.id));

    function clickToogleFavorito() {
        localFavoritos.toggleFavorito(pokemon.id);
        setisInFavoritos ( !isInFavoritos ); //2
    }

    return (
        <Layout title= { pokemon.name }>
            <Grid.Container css= {{ marginTop: '5px' }} gap={2}>
                <Grid xs={ 12 } sm = {4}>
                    <Card isHoverable css= {{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src= { pokemon.sprites.other?.dream_world.front_default || '/no-iamge.jpg' }
                                alt={ pokemon.name }
                                width = "100%"
                                height={ 200 }
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{ pokemon.name }</Text>
                            <Button color="gradient" 
                                    ghost = { !isInFavoritos } //*1
                                    onPress={ clickToogleFavorito }
                                    >
                                { isInFavoritos ? 'En Favoritos' : 'Guardar en Favoritos' }
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container display='flex' direction='row'>
                                <Image 
                                    src = { pokemon.sprites.front_default }
                                    alt = { pokemon.name }
                                    width = { 100 }
                                    height = { 100 }
                                />
                                <Image 
                                    src = { pokemon.sprites.back_default }
                                    alt = { pokemon.name }
                                    width = { 100 }
                                    height = { 100 }
                                />
                                <Image 
                                    src = { pokemon.sprites.front_shiny }
                                    alt = { pokemon.name }
                                    width = { 100 }
                                    height = { 100 }
                                />
                                <Image 
                                    src = { pokemon.sprites.back_shiny }
                                    alt = { pokemon.name }
                                    width = { 100 }
                                    height = { 100 }
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

//del lado del servidor

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons150: string[] = [...Array(50)].map( (value, index) => `${ index + 1 }`);
    return {
        paths: pokemons150.map ( id => ({
            params: { id: id }
        })),
        fallback: false
    }
}
// export const getStaticProps: GetStaticProps = async ( ctx. ) => {
export const getStaticProps: GetStaticProps = async ( { params } ) => {
    
    //extraigo el id del params del contexto ctx
    const { id } = params as { id: string };
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;