import React from 'react';
import { FaGithub, } from 'react-icons/fa';
import {  AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Akhil. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:akhilkumar7112@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					
					<a href="https://linkedin.com/in/akhil-kumar-551a13255/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} rel="noreferrer">
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/Akhilsaharan78881" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} rel="noreferrer" >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://www.instagram.com/akhil_saharan/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} rel="noreferrer">
						<FaInstagram className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;