import React, { FC } from 'react'
import Head from 'next/head'
//toma el archivo barril index.ts
import { Navbar } from '../ui'; 
type Props = { 
  children: React.ReactNode ;
  title?: string
};
// interface Props { 
//   children: React.ReactNode ;
//   title?: string;
// };

export const Layout: FC<Props> = ( { children, title }) => {
  return (
    <> 
        <Head>
          <title>{ title || 'Pokemon App' }</title>
          <meta name="author" content="Morgado"/>
          <meta name="description" content="Informacion turistica" />
          <meta name="keywords" content={ `${title}, Apartamentos Tursisticos, La Invencible, Terreros, Mojacar` } />

        </Head>
        <Navbar />
        <main style= {{
          padding: '20px 20px'
        }}>
          { children }
        </main>
    </>
  )
}
