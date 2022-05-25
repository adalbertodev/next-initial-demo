import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from '../../styles/MainLayout.module.css';
import { FC } from 'react';

export const MainLayout: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Adalberto</title>
        <meta name='description' content='Contact Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
