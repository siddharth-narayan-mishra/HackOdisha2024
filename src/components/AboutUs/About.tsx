"use client"
import React from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const AboutUs = () => {

    const isMobile = () => {
      // Adjust this based on your actual breakpoint for mobile devices
      return window.innerWidth <= 768;
    };
  
    const getParallaxSpeed = () => {
      return isMobile() ? 5 : 10; // Adjust speeds for mobile and desktop
    };
  return (
    <ParallaxProvider>
      <div className='bg-[#634752] w-full min-h-[750px] flex flex-col items-center justify-center p-10 md:p-30 lg:p-40 pt-5 lg:pt-10 relative'>
        
        <Parallax className='absolute bottom-20 md:left-12 left-5 z-0' speed={getParallaxSpeed()}>
          <Image
            src='/images/aboutus-bottom-star.png'
            alt='Star-1'
            height={45}
            width={45}
          />
        </Parallax>

        <Parallax className='absolute top-2 md:right-12 right-5 z-0' speed={-7}>
          <Image
            src='/images/aboutus-top-star.png'
            alt='Star-2'
            height={45}
            width={45}
          />
        </Parallax>

        <div className='relative text-justify w-full'>
          <div className='pb-4 relative -rotate-6 w-full z-10'>
            <div className='absolute top-0  md:left-52 left-20 md:w-[280px] w-[180px]'>
              <Image
                src='/images/aboutus-crack-wall.png'
                alt='Crack-wall'
                height={200}
                width={270}
                className='opacity-75'
              />
            </div>
            <div className="pl-5">
            <h4 className='text-[#FEDAC4] md:text-xl text-sm font-semibold md:px-10 md:pl-20 px-5 pb-10 relative'>
              SO YOU MIGHT BE THINKING..
            </h4>
            <h1 className='text-[#FFFFFF] sm:text-4xl text-xl font-bold md:px-10 px-1 pb-10 relative'>
              What is <span className='bg-black pb-2.5 pr-1.5 shadow-lg relative'>
                <span className='bg-[#E16C00] p-1 z-10'>HACKODISHA?</span>
              </span>
            </h1>
            </div>
          </div>

          <div className='px-5 md:px-16 text-justify pt-10'>
            <p className='text-[#E7E7E7] pb-4'>
              HackOdisha- a thrilling <span className='text-[#E16C00]'>36-hour online hackathon</span> organized by <span className='text-[#E16C00]'>Webwiz, Nit Rourkela</span>— an event dedicated to fostering community collaboration. With an impressive turnout of over 1600 participants across India, this hackathon promises to be a platform where innovation knows no bounds.
            </p>
            <p className='text-[#E7E7E7]'>
              We celebrate the power of technology and the indomitable spirit of our participants. Together, we're shaping a brighter future through <span className='text-[#E16C00]'>innovation and collaboration.</span>
            </p>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default AboutUs;
