import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json';
import {
  launchVehiclePortrait, launchVehicleLandscape, spaceCapsulePortrait,
  spaceCapsuleLandscape, spaceportPortrait, spaceportLandscape
} from '../assets/technology/index'

const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const technology = data.technology;

  const images = [
    { 'portrait': launchVehiclePortrait, 'landscape': launchVehicleLandscape },
    { 'portrait': spaceportPortrait, 'landscape': spaceportLandscape },
    { 'portrait': spaceCapsulePortrait, 'landscape': spaceCapsuleLandscape },
  ]

  const paginations = [1, 2, 3]

  // pagination
  const page = paginations.map((page, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          setCurrentSlide(index);
        }}
        className={` inactive-page cursor-pointer font-Bellefair border-[1px] rounded-full 
          text-[18px] ss:text-[36px] w-[40px] h-[40px] ss:w-[84px] ss:h-[84px]
        ${currentSlide === index ? 'active-page' : ''}`}
      >{page}
      </div>
    );
  });

  // Rendered technology Content
  const tech = technology.map((tech, index) => {
    return (
      <div
        key={index}
        className={`${currentSlide === index ? 'active-content' : 'inactive-content'} 
        ss:pt-12 md:pt-0 flex px-6 ss:px-10 md:px-0
        text-center flex-col md:text-left`}>
        <h4 className='font-BarlowCondensed text-babyBlue text-[18px] tracking-[0.3rem]'>THE TERMINOLOGY...</h4>
        <h1 className="text-white text-[25px] mb-4 ss:text-[52px] uppercase font-Bellefair">{tech.name}</h1>
        <p className="text-babyBlue font-Barlow mb-16 md:mb-0 ss:px-18 md:px-0 text-base ss:text-[20px]
        md:text-[18px] md:w-[450px] leading-[24px] ss:leading-[32px]">{tech.description}</p>
      </div>
    )
  })

  const image = images.map((image, index) => {
    return (
      <div key={index} className={`${currentSlide === index ? 'active-content' : 'inactive-content'} 
      my-8 md:my-0 w-full h-auto p-0`}>
        <img src={image.portrait} className="w-full hidden md:flex h-full " alt="{Technology Image}" />
        <img src={image.landscape} className="w-full flex md:hidden h-[200px] ss:min-h-[400px] object-cover" alt="{Technology Image}" />
      </div>
    );
  });



  return (
    <section id='technology'>
      <Navbar />
      {/* Crew container */}
      <div className="flex gap-6 tracking-[0.25rem] justify-center mt-8 ss:mt-0 ss:justify-start ss:pt-10
       md:pt-8 ss:pl-10 md:pl-44">
        <h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] font-bold text-semiWhite">03</h3>
        <h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] text-white ">SPACE LAUNCH 101</h3>
      </div>
      {/* Destination container */}
      <div className='md:pl-44 flex flex-col-reverse md:flex-row items-center md:justify-between md:gap-16 md:mt-6'>
        {/* Left Div */}
        <div className='flex items-center flex-col md:items-start md:gap-8 md:flex-row'>
          <div className='flex mb-6 ss:mb-0 md:flex-col gap-4 ss:gap-8'>{page}</div>
          <div>{tech}</div>
        </div>
        {/* Right Div */}
        <div>{image}</div>
      </div>
    </section>
  )
}

export default Technology
