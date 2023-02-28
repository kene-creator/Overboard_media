import React from 'react';
import { Space_Grotesk } from '@next/font/google';
import { UilArrowRight } from '@iconscout/react-unicons';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

export default function Achievements() {
  return (
    <div className="flex px-16 py-16 w-full">
      <div className="flex flex-wrap basis-[45%]">
        <div className=" basis-1/2 flex justify-start mb-8 flex-col">
          <h3 className={`${space.className} text-[3rem]`}>245%</h3>
          <p className="w-[60%] text-gray-500">More revenues for your brand</p>
        </div>
        <div className=" basis-1/2 flex flex-col mb-8">
          <h3 className={`${space.className} text-[3rem]`}>130k+</h3>
          <p className="w-[60%] text-gray-500">
            Audience reached across all platforms
          </p>
        </div>
        <div className=" basis-1/2 flex justify-start flex-col">
          <h3 className={`${space.className} text-[3rem]`}>50+</h3>
          <p className="w-[60%] text-gray-500">Brands work with us</p>
        </div>
        <div className=" basis-1/2 flex flex-col">
          <h3 className={`${space.className} text-[3rem]`}>120%</h3>
          <p className="w-[60%] text-gray-500">
            Growth in followers and customer interaction
          </p>
        </div>
      </div>
      <div className="basis-[55%] flex flex-col">
        <h3 className={`${space.className} text-[2.5rem]`}>Our Commitments</h3>
        <p>
          At our digital marketing firm, we are committed to delivering the best
          possible results for our clients through the use of cutting-edge
          digital marketing automation and integration tools. We understand that
          in today&apos;s fast-paced business environment, time is of the
          essence, and our automation solutions will save our clients valuable
          time while increasing their efficiency and productivity.
          <br />
          <br />
          We are also committed to providing our clients with the highest level
          of digital marketing consultation. Our team of experienced and
          knowledgeable professionals will work with our clients to develop a
          customized digital marketing strategy that is tailored to their
          specific needs and goals.
        </p>
        <a
          href=""
          className="flex justify-start items-center mt-4 text-indigo-700 hover:text-pink-700"
        >
          Learn more <UilArrowRight />
        </a>
      </div>
    </div>
  );
}
