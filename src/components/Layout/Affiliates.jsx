import { Space_Grotesk } from '@next/font/google';
import AffiliatesIcons from '../Utility/AffiliateIcons';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

const Affiliates = () => {
  return (
    <div className="px-20 w-full">
      <div className="flex items-center justify-start w-[70%]">
        <h3 className={`${space.className} text-3xl mr-12 `}>
          Companies We Work With
        </h3>
        <p className="basis-[80%]">
          At our company, we understand that every business is unique and
          requires a personalized approach to succeed in the digital world.
          That&apos;s why we work closely with our clients to develop
          tailor-made strategies that meet their specific needs and goals.
        </p>
      </div>
      <div className="py-16 w-full">
        <AffiliatesIcons />
      </div>
    </div>
  );
};

export default Affiliates;
