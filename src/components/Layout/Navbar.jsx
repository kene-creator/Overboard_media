import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  console.log(active);

  const links = ['Home', 'How it works', 'Our Work', 'Pricing', 'About Us'];

  return (
    <div className="flex justify-between items-center px-16 h-[4rem] bg-white">
      <div className="flex justify-center items-center">
        <Image
          src="/images/company_logo.png"
          alt="company logo"
          className="w-[6rem] h-[6rem]"
          width={90}
          height={90}
        />
        <div className="ml-6 font-mono text-base font-semibold">
          <ul className="flex items-center justify-center text-xs">
            {links.map((link) => (
              <li
                className="mr-6 text-black hover:border-b hover:border-violet-600"
                key={link}
              >
                <a
                  href={`#${link}`}
                  className={`${active === link && 'text-blue-500'}`}
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
        <button>Try It Now</button>
      </div>
    </div>
  );
};

export default Navbar;
