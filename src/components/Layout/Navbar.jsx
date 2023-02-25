import Image from 'next/image';
import { useState } from 'react';
import { Space_Grotesk } from '@next/font/google';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const links = ['Home', 'How it works', 'Our Work', 'Pricing', 'About Us'];

  return (
    <div className="flex justify-between items-center px-16 h-[4rem] bg-white shadow-md w-full">
      <div className="flex justify-center items-center">
        <div>
          <a href="" className="flex items-center justify-center">
            <Image
              src="/images/company_logo.png"
              alt="company logo"
              className="w-[6rem] h-[6rem]"
              width={90}
              height={90}
            />
            <p className={`${space.className} text-2xl`}>Overboard Media</p>
          </a>
        </div>
        <div className="ml-16 font-sans text-base font-semibold">
          <ul className="flex items-center justify-center text-xs">
            {links.map((link) => (
              <li className="mr-6 text-black relative py-1" key={link}>
                <a
                  href={`#${link}`}
                  className={`${
                    active === link && 'text-[#3461FF]'
                  } hover-border-left-to-right`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-indigo-700 to-pink-600 hover:from-indigo-800 hover:to-pink-700 text-white font-normal py-2 px-4 rounded-full font-mono">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
