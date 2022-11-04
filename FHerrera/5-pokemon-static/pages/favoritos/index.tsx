import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { PokemonsFavoritos } from '../../components/pokemon';
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
                : ( <PokemonsFavoritos pokemons={favoritePokemons} /> )
            }
            
        </Layout>
    )
}

export default FavoritosPage;