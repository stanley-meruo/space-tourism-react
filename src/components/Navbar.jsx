import React, { useState } from 'react';
import { logo, hamburger, close } from '../assets/shared';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';



const Navbar = () => {
	const [ menu, setMenu ] = useState(false);

	const toggleMenu = () => {
		setMenu((menu) => !menu);
	};

  function getLinkClassName({ isActive }) {
    return `link flex gap-2 text-white font-BarlowCondensed items-center ${isActive ? 'link-active' : ''}`;
  }

	return (
		// Navbar
		<nav className="p-6 flex justify-between items-center ss:pl-10 ss:p-0 md:py-12 md:pl-16">
			{/* Logo container */}
			<Link to='/'>
			    <div className="ss:pt-4 md:pl-0">
				<img src={logo} className="h-[40px] ss:h-[50px] w-auto" alt="Logo" />
			    </div>
			</Link>
			{/* > Tablet NavNavLinks */}
			<div className="glass hidden items-center sm:flex ss:p-10 md:px-12 gap-12 ss:py-7 tracking-[0.15rem] relative">
				<div className='nav-line absolute right-[46em] bg-semiWhite w-[425px] h-[1px] ' />
            <NavLink to="/" className={getLinkClassName}>
            <h4 className="font-[600] text-[17px] hidden md:flex">00</h4>
            <h5 className="text-[17px]">HOME</h5>
            </NavLink>
            <NavLink to="/destination" className={getLinkClassName}>
            <h4 className="font-[600] text-[17px] hidden md:flex">01</h4>
            <h5 className="text-[17px]">DESTINATION</h5>
            </NavLink>
            <NavLink to="/crew" className={getLinkClassName}>
            <h4 className="font-[600] text-[17px] hidden md:flex">02</h4>
            <h5 className="text-[17px]">CREW</h5>
            </NavLink>
            <NavLink to="/technology" className={getLinkClassName}>
            <h4 className="font-[600] text-[17px] hidden md:flex">03</h4>
            <h5 className="text-[17px]">TECHNOLOGY</h5>
            </NavLink>
			</div>
			
			{/* Menu button */}
			<div onClick={toggleMenu} className="flex sm:hidden cursor-pointer ss:p-6">
				<img src={hamburger} className="w-[30px] h-auto " />
			</div>

			{/* Mobile NavNavLinks */}
			<AnimatePresence>
				{menu && (
					<motion.div
						className="h-[100vh] w-[250px] flex ss:hidden flex-col z-10 items-start gap-6 glass fixed top-0 right-0 p-6"
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ duration: 0.4 }}
					>
					<div onClick={toggleMenu} className="mb-12 relative flex items-end cursor-pointer w-full">
						<img src={close} className="absolute right-0 top-2 w-[30px] h-auto mr-2" />
					</div>
					
					<NavLink to="/" className={getLinkClassName}>
						<div className="flex gap-2 text-white font-BarlowCondensed items-center">
							<h4 className="font-[600] text-[17px]">00</h4>
							<h5 className="text-[17px]">HOME</h5>
						</div>
					</NavLink>
					<NavLink to="/destination" className={getLinkClassName}>
						<div className="flex gap-2 text-white font-BarlowCondensed items-center">
							<h4 className="font-[600] text-[17px]">01</h4>
							<h5 className="text-[17px]">DESTINATION</h5>
						</div>
					</NavLink>
					<NavLink to="/crew" className={getLinkClassName}>
						<div className="flex gap-2 text-white font-BarlowCondensed items-center">
							<h4 className="font-[600] text-[17px]">02</h4>
							<h5 className="text-[17px]">CREW</h5>
						</div>
					</NavLink>
					<NavLink to="/technology" className={getLinkClassName}>
						<div className="flex gap-2 text-white font-BarlowCondensed items-center">
							<h4 className="font-[600] text-[17px]">03</h4>
							<h5 className="text-[17px]">TECHNOLOGY</h5>
						</div>
					</NavLink>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
