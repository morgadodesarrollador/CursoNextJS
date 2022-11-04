import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoritoCardPokemon } from "./FavoritoCardPokemon";

interface Props {
    pokemons: number[];
}

export const PokemonsFavoritos: FC<Props> = ({ pokemons }) => {
    return (

        <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                    <FavoritoCardPokemon key={id} pokemonId={id}/>
                ))
            }
        </Grid.Container>

    )
}