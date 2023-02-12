import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const links = ['Home', 'How it works', 'Our Work', 'Pricing', 'About Us'];
  return (
    <div className="flex">
      <div>
        <Image
          src="/images/company_logo.png"
          alt="company logo"
          width={150}
          height={150}
        />
      </div>
      <div>
        <ul className="flex items-center justify-center text-xs">
          {links.map((link) => (
            <li className="mr-6 text-slate-400" key={link}>
              <a
                href={`#${link}`}
                className={`${active === link && 'text-black'}`}
                onClick={() => setActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button>Try It Now</button>
      </div>
    </div>
  );
};

export default Navbar;
