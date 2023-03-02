import React from 'react';
import { Space_Grotesk } from '@next/font/google';
import Image from 'next/image';

const space = Space_Grotesk({ subsets: ['latin'], weight: ['700'] });

export default function HowItWorks() {
  return (
    <div className="px-16 py-8 flex">
      <div className="basis-[40%]">
        <div className="flex flex-col">
          <h3 className={`${space.className} text-[2rem]`}>How It Works</h3>
          <p className="text-left text-sm">
            Our digital marketing firm specializes in enhancing our
            clients&apos; online presence through social media management,
            graphic design, social media advertising, and improving account
            interactions. Firstly, we work closely with our clients to
            understand their goals, target audience, and brand identity to
            develop a customized social media strategy. This includes selecting
            the appropriate social media platforms, creating and curating
            engaging content, and managing the social media accounts on a daily
            basis.
            <br />
            <br />
            Secondly, our graphic design team creates visually appealing
            graphics and videos that align with our clients&apos; brand identity
            and messaging. These graphics and videos are used to enhance social
            media posts and improve engagement with the target audience.
            <br />
            <br />
            Thirdly, we develop and run targeted social media advertisements
            that reach the right people at the right time. Our team uses data
            analysis to determine the best ad format, placement, and targeting
            for each campaign.
            <br />
            <br />
            Finally, we continually monitor our clients&apos; social media
            accounts and interactions to identify areas for improvement. We
            analyze engagement metrics, respond to comments and messages
            promptly, and provide regular reports on performance and progress.
            Overall, our digital marketing firm works tirelessly to help our
            clients achieve their social media and marketing goals, increase
            engagement, and ultimately grow their business.
          </p>
        </div>
      </div>
      <div className="pl-16 pt-8 flex flex-wrap basis-[60%] justify-center">
        <div className=" basis-1/2 flex justify-start mb-8 flex-col">
          <Image
            src="/images/majesticons_dollar-circle.png"
            alt="rocket icon"
            className=""
            width={50}
            height={50}
          />
          <h3 className="font-bold py-1">Ideation</h3>
          <p className="text-sm w-[70%]">
            We promise sustainable and visible business growth that spans
            accross all ascpect of your business most especially the digital
            side of it.
          </p>
        </div>
        <div className=" basis-1/2 flex justify-start mb-8 flex-col">
          <Image
            src="/images/majesticons_dollar-circle (3).png"
            alt="rocket icon"
            className=""
            width={50}
            height={50}
          />
          <h3 className="font-bold py-1">Budget</h3>
          <p className="text-sm w-[70%]">
            At Overboard Media we have special plans and packages that suites
            our clients need.
          </p>
        </div>
        <div className=" basis-1/2 flex justify-start mb-8 flex-col">
          <Image
            src="/images/majesticons_dollar-circle (1).png"
            alt="rocket icon"
            className=""
            width={50}
            height={50}
          />
          <h3 className="font-bold py-1">Performance</h3>
          <p className="text-sm w-[70%]">
            Vast media team ensure that we are one of the best digital marketing
            company.
          </p>
        </div>
        <div className=" basis-1/2 flex justify-start mb-8 flex-col">
          <Image
            src="/images/majesticons_dollar-circle (2).png"
            alt="rocket icon"
            className=""
            width={50}
            height={50}
          />
          <h3 className="font-bold py-1">Speed</h3>
          <p className="text-sm w-[70%]">We deliver as promised.</p>
        </div>
      </div>
    </div>
  );
}
