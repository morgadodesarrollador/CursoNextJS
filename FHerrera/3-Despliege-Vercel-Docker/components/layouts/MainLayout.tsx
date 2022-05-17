import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';
type Props = { children: React.ReactNode };


import styles from './MainLayout.module.css';

export const MainLayout:  React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home - Fernando</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { children }
    
          </main>     
        </div>
      )
};
