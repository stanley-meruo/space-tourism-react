import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import data from '../data.json';
import { moon, mars, europa, titan } from '../assets/destination/index'
import { motion } from 'framer-motion';

const Destination = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const destination = data.destinations;


	const images = [moon, mars, europa, titan]

	// Destination Names and paginations
	const names = destination.map((name, index) => {
		return (
			<div
				onClick={() => {
					setCurrentSlide(index);
				}}
				key={index}
			>
				<h4
					className={`name text-babyBlue cursor-pointer font-BarlowCondensed uppercase text-[14px] ss:text-[16px]
          ss:mt-6 md:mt-0 mb-6 tracking-[0.15rem] ss:tracking-[0.25rem]
        ${currentSlide === index ? 'name-active' : ''}`}
				>
					{name.name}
				</h4>
			</div>
		);
	});

	// Rendered Destination Content
	const content = destination.map((content, index) => {
		return (
			<div key={index} className={`${currentSlide === index ? 'active-content' : 'inactive-content'} px-6 ss:px-10 md:px-0 
      			text-center flex-col md:text-left`}>
				<h1 className="text-white text-[75px] ss:text-[100px] uppercase font-Bellefair">{content.name}</h1>
				<p className="text-babyBlue font-Barlow text-[14px] ss:text-[20px] md:w-[425px] leading-[24px] ss:leading-[32px]">{content.description}</p>
				<div className="h-[1px] md:w-[450px] bg-semiWhite my-12" />
				<div className="flex flex-col gap-6 ss:flex-row md:w-[450px] justify-center ss:gap-16 md:gap-0 md:justify-between ">
					<div className='ss:text-left'>
						<h4 className="text-babyBlue font-BarlowCondensed text-[16px] font-bold">AVG. DISTANCE</h4>
						<h3 className="text-white font-Bellefair text-[28px] md:text-[32px] uppercase">{content.distance}</h3>
					</div>
					<div className='ss:text-left'>
						<h4 className="text-babyBlue font-BarlowCondensed text-[16px] font-bold">EST. TRAVEL TIME</h4>
						<h3 className="text-white font-Bellefair text-[28px] md:text-[32px] uppercase">{content.travel}</h3>
					</div>
				</div>
			</div>
		);
	});

	const image = images.map((image, index) => {
		return (
			<div
				key={index}
				className={`${currentSlide === index ? 'active-content' : 'inactive-content'} max-w-[250px] max-h-[250px] 
      ss:max-w-[450px] ss:max-h-[450px] md:max-w-[450px] md:max-h-[450px]`}
			>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" }}
					style={{ willChange: "transform" }}
				>
					<img src={image} className="w-full h-full" alt="destination image" />
				</motion.div>

			</div>
		);
	});



	return (
		// Page content
		<section id="destination">
			{/* imported Navbar */}
			<Navbar />
			<div className="flex gap-4 ss:gap-6 tracking-[0.25rem] justify-center mt-8 
      ss:mt-0 ss:justify-start ss:pt-10 md:pt-8 ss:pl-10 md:pl-44">
				<h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] font-bold text-semiWhite">01</h3>
				<h3 className="font-BarlowCondensed text-[18px] ss:text-[24px] text-white ">PICK YOUR DESTINATION</h3>
			</div>
			{/* Destination container */}
			<div className="flex flex-col items-center md:flex-row md:pl-44 md:items-center pt-12 pb-24 ss:py-24 gap-8">
				{/* Left Div */}
				<div className="flex flex-1 ">{image}</div>
				{/* Right Div */}
				<div className="flex flex-1 flex-col items-center md:mr-10 md:items-start">
					<div className="flex gap-5 ss:gap-8 ">{names}</div>
					{content}
				</div>
			</div>
		</section>
	);
};

export default Destination;
