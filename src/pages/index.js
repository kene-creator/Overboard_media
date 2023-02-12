import Head from 'next/head';
import Image from 'next/image';
import { Inter, Space_Grotesk } from '@next/font/google';
import Navbar from '@/components/Layout/Navbar';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });
console.log(space);

export default function Home() {
  return (
    <>
      <Head>
        <Navbar></Navbar>
      </Head>
    </>
  );
}
