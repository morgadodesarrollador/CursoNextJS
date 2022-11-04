
const toggleFavorito = ( id: number ) => {
    console.log ('toogleFavorito llamado');
    let favoritos: number[] = JSON.parse( localStorage.getItem('favoritos') || '[]');

    if ( favoritos.includes(id)){
        favoritos = favoritos.filter( pokeId => pokeId !== id );
    }else {
        favoritos.push(id);
    }
    localStorage.setItem('favoritos', JSON.stringify( favoritos ))
}

const existePokemonINFavoritos = ( id: number ): boolean => {

    // de este modo Next no procesará el localstorage que es propia del cliente
    if (typeof window === 'undefined') return false;

    const favoritos: number[] = JSON.parse (localStorage.getItem('favoritos') || '[]');
    return favoritos.includes( id );
}

const pokemons = (): number[] => {
    // console.log( JSON.parse (localStorage.getItem('favorites') || '[]'));
    return JSON.parse (localStorage.getItem('favoritos') || '[]')
}

export default { 
    toggleFavorito, 
    existePokemonINFavoritos, 
    pokemons
}
