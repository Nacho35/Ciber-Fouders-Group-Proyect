import React from 'react';
import notebook from '../../../public/images/notebook.svg';
import github from '../../../public/images/github.svg';
import web from '../../../public/images/world.svg';
import linkedin from '../../../public/images/linkedin.svg';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='footer items-center p-8 m-auto bg-colorOne text-neutral-content'>
			<div className='justify-evenly grid-flow-col'>
				<p className='font-semibold'>
					<Image src={notebook} alt='icon' />
					Fast Diary 2023 Ignacio Morales
				</p>
			</div>
			<div className='grid-flow-col gap-4 md:place-self-center md:justify-self-center'>
				<div className='text-center mx-3'>
					<a href='https://github.com/Nacho35'>
						<Image src={github} alt='icon' />
					</a>
					<h3 className='p-1 text-colorFive font-medium'>GitHub</h3>
				</div>
				<div className='text-center mx-3'>
					<a href='https://portfolio-ignacio-morales.netlify.app/'>
						<Image src={web} alt='icon' />
					</a>
					<h3 className='p-1 text-colorFive font-medium'>Web</h3>
				</div>
				<div className='text-center mx-3'>
					<a href='https://www.linkedin.com/in/ignacio-morales35/'>
						<Image src={linkedin} alt='icon' />
					</a>
					<h3 className='p-1 text-colorFive font-medium'>LinkedIn</h3>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
