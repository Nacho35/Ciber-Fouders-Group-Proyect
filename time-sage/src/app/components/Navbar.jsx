'use client';
import React, { useEffect } from 'react';
import Calendar from './Calendar';
import Clock from './Clock';
import Image from 'next/image';
import clock from '../../../public/images/clock.svg';
import calendar from '../../../public/images/calendar.svg';
import timer from '../../../public/images/timer.svg';
import { navAnimation } from '../animations';
import ModalCountdown from './ModalCountdown';

const Navbar = () => {
	useEffect(() => {
		navAnimation();
	}, []);
	return (
		<div className='navbar bg-colorOne font-Poppins fixed top-0 z-50 h-16'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
						<div className='w-11'>
							<Image id='calendar' src={calendar} alt='icon' />
						</div>
					</label>
					<div
						tabIndex={0}
						className='menu menu-md uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-colorOne rounded-box w-80'
					>
						<div>
							<Calendar />
						</div>
					</div>
				</div>
			</div>
			<div className='dropdown dropdown-content self-center'>
				<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
					<div className='w-11'>
						<Image id='timer' src={timer} alt='icon' />
					</div>
				</label>
				<div
					tabIndex={0}
					className='menu uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-colorOne rounded-box w-fit'
				>
					<ModalCountdown />
				</div>
			</div>
			<div className='navbar navbar-end '>
				<div className=' dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
						<div className='w-11'>
							<Image id='clock' src={clock} alt='icon' />
						</div>
					</label>
					<div
						tabIndex={0}
						className='menu dropdown-content ml-5 mt-3 p-2 z-[1] shadow bg-colorOne rounded-full w-fit'
					>
						<Clock />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
