import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { SmallPokemon } from '../../interfaces';

interface Props {
    pokemon: SmallPokemon
}
export const PokemonCard : FC<Props> = ( { pokemon }) => {
    const router = useRouter();
    console.log (router.query);

    const hacerClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return(
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
              <Card onClick={ hacerClick }
                    isHoverable isPressable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body css={{ p: 1}}>
                  <Card.Image 
                    src= { pokemon.img }
                    width= "100%"
                    height= "140px"
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text>{ pokemon.id }</Text>
                    <Text transform='capitalize'>{ pokemon.name }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
    )
}