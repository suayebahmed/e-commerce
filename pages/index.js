import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-Commerce website by Suayeb Ahmed</title>
        <meta name="description" content="Suayeb Ahmed's e-commerce app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component="h1" variant="h1">
        E-Commerce
      </Typography>
    </div>
  );
}
