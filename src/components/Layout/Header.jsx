import { Space_Grotesk } from '@next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CtaForm from '../UI/CtaForm';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

const Header = () => {
  return (
    <div
      className="flex px-20 py-12 bg-no-repeat bg-top"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="basis-[50%]">
        <h1 className={`${space.className} text-[3.4rem] leading-[3.7rem]`}>
          We Take Care Of Your Brands and Socail Media Apperance.
        </h1>
        <p className="mt-6 font-mono text-sm text-gray-500 bg-[#F9F9FD] p-2 rounded-lg mb-8">
          Welcome to our website! We are a team of social media management and
          marketing experts who specialize in helping businesses grow and
          succeed in the digital world. Our services include marketing strategy
          and research, digital marketing automation and integration, and
          digital consulting. Contact us today to learn more about how we can
          help your business thrive in the digital age.
        </p>
        <CtaForm />
      </div>
      <div className="mx-auto">
        <Image
          src="/images/rocket-dynamic-color.png"
          alt="rocket icon"
          className=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Header;
