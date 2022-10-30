
import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components/layouts';

const PokemonPage = () => {
    //ejecución en Cliente + Servidor
    const router = useRouter();
    console.log(router.query);
    return (
        <Layout title='Detalle del pokemon'>
            <h1>Detalle del pokemon</h1>
        </Layout>
    )
}


//del lado del servidor

export default PokemonPage;