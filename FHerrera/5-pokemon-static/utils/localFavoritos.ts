
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

export default { 
    toggleFavorito
}
