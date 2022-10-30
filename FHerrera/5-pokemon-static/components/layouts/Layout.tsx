import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui";

type Props = {
    children: React.ReactNode,
    title?: string
}
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title } </title>
                <meta name="author" content="J.A Morgado"/>
                <meta name="description" content="Información sobre el pokemon XXXX"/>
                <meta name="keywords" content="XXX, pokemon, pokedex"/>
            </Head>
            <Navbar/>
            <main style={{
                padding: '20px'
            }}>
                { children } 
            </main>
        
        </>
    )
}