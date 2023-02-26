import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter, Space_Grotesk } from '@next/font/google';
import { LayoutGroup, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Layout/Navbar';
import Header from '@/components/Layout/Header';
import Affiliates from '@/components/Layout/Affiliates';

const inter = Inter({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });

export default function Home() {
  const [isAffiliatesInView, setIsAffiliatesInView] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setIsAffiliatesInView(true);
    }
  }, [inView]);

  return (
    <>
      <LayoutGroup>
        <Navbar />
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: isAffiliatesInView ? 1000 : 0 }}
          animate={{ x: isAffiliatesInView ? 0 : 1000 }}
          transition={{ duration: 1 }}
        >
          <Affiliates />
        </motion.div>
      </LayoutGroup>
    </>
  );
}
