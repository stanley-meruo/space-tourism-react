import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { anousheh, douglas, mark, victor } from '../assets/crew/index'
import data from '../data.json';


const Crew = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const crew = data.crew;

  const images = [douglas, mark, victor, anousheh]

  // Crew paginations
  const page = crew.map((page, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          setCurrentSlide(index);
        }}
        className={` cursor-pointer w-[14px] h-[14px] ss:w-[16px] ss:h-[16px] rounded-full
        ${currentSlide === index ? 'bg-white' : 'bg-semiWhite'}`}
      >
      </div>
    );
  });

  // Rendered Crew Content
  const content = crew.map((content, index) => {
    return (
      <div
        key={index}
        className={`${currentSlide === index ? 'active-content' : 'inactive-content'} ss:pt-12 md:pt-0 flex px-6 ss:px-10 md:px-0
        text-center flex-col md:text-left`}>
        <h2 className="text-semiWhite text-[20px] ss:text-[28px] uppercase font-Bellefair">{content.role}</h2>
        <h1 className="text-white text-[25px] mb-4 ss:text-[52px] uppercase font-Bellefair">{content.name}</h1>
        <p className="text-babyBlue font-Barlow ss:px-18 md:px-0 text-base ss:text-[20px] md:text-[18px] md:w-[450px] 
        leading-[24px] ss:leading-[32px]">{content.bio}</p>
      </div>
    )
  })

  const image = images.map((image, index) => {
    return (
      <div key={index} className={`${currentSlide === index ? 'active-content' : 'inactive-content'} px-24 ss:px-0 md:mr-24`}>
        <img src={image} className="w-full h-full border-b-[1px] border-semiWhite" alt="{crew member image}" />
      </div>
    );
  });


  return (
    // Page content
    <section id='crew'>
      {/* imported Navbar */}
      <Navbar />
      {/* Crew container */}
      <div className="flex gap-6 tracking-[0.25rem] justify-center mt-8 ss:mt-0 ss:justify-start ss:pt-10 md:pt-8 ss:pl-10 md:pl-44">
        <h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] font-bold text-semiWhite">02</h3>
        <h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] text-white ">MEET YOUR CREW</h3>
      </div>
      {/* Crew container */}
      <div className="flex flex-col-reverse ss:flex-col items-center pb-12 ss:pb-0 md:flex-row md:pl-44 md:items-center gap-8">
        <div className='flex flex-1 flex-col-reverse ss:flex-col'>
          <div className='my-5'>{content}</div>
          <div className='flex w-full gap-4 ss:gap-6 mb-6 ss:my-12 justify-center md:justify-start'>{page}</div>
        </div>
        {/* // RightDiv */}
        <div className='flex flex-1 mt-10 ss:mt-0'>{image}</div>
      </div>
    </section>
  )
}

export default Crew
