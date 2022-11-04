import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { Nofavoritos } from '../../components/ui';
import { localFavoritos } from '../../utils';

const FavoritosPage = () => {

    //iniciamos el estado setfavortitePokemons
    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

    //se ejecuta la primera vez que se crea la página
    useEffect( () => {
        setfavoritePokemons (localFavoritos.pokemons())
    }, []);
    return (
        <Layout title='Pokemons - Favoritos'>
            {
                favoritePokemons.length === 0
                ? ( <Nofavoritos /> )
                : (
                    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
                        {
                            favoritePokemons.map(id => (
                                <Grid xs={ 6 } sm={ 3 } md={2} xl={1} key={ id }>
                                    <Card isHoverable  css = {{ padding: 10 }} >
                                        <Card.Image
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                            width= {'100%'} 
                                            height= {140 }
                                        />
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid.Container>
                )
            }
            
        </Layout>
    )
}

export default FavoritosPage;