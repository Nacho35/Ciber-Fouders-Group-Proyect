'use client';
import React, { useEffect } from 'react';
import Calendar from './Calendar';
import Clock from './Clock';
import Image from 'next/image';
import clock from '../../../public/images/clock.svg';
import calendar from '../../../public/images/calendar.svg';
import timer from '../../../public/images/timer.svg';
import bars from '../../../public/images/bars.svg';
import { navAnimation } from '../animations';
import ModalCountdown from './ModalCountdown';
import { Link } from 'react-scroll';

const Navbar = () => {
	useEffect(() => {
		navAnimation();
	}, []);

	return (
		<nav className='navbar bg-colorOne m-auto font-Poppins fixed top-0 z-50 h-16'>
			<div className='navbar justify-start font-semibold'>
				<Link
					id='fast'
					to='home'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className='btn btn-ghost normal-case'
				>
					Fast Diary
				</Link>
			</div>
			<div className='navbar justify-evenly font-semibold'>
				<Link
					id='calendar'
					to='diary'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className='btn btn-ghost normal-case'
				>
					Calendar
				</Link>
				<Link
					id='task'
					to='task'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className='btn btn-ghost normal-case'
				>
					Task
				</Link>
			</div>
			<div className='drawer z-50 text-end'>
				<input id='my-drawer' type='checkbox' className='drawer-toggle' />
				<div className='drawer-content ml-3 my-1'>
					<label htmlFor='my-drawer' className='btn btn-ghost drawer-button'>
						<Image src={bars} alt='button' />
					</label>
				</div>
				<div className='drawer-side'>
					<label htmlFor='my-drawer' className='drawer-overlay'></label>
					<ul className='menu p-4 w-fit h-full bg-colorOne flex justify-between text-base-content'>
						<div className='navbar-start'>
							<div className='dropdown dropdown-right'>
								<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
									<div className='w-11'>
										<Image src={calendar} alt='icon' />
									</div>
								</label>
								<div
									tabIndex={0}
									className='menu menu-md uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-colorOne rounded-box w-80 ml-4'
								>
									<div>
										<Calendar />
									</div>
								</div>
							</div>
						</div>

						<div className='dropdown dropdown-right self-center'>
							<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
								<div className='w-11'>
									<Image src={timer} alt='icon' />
								</div>
							</label>
							<div
								tabIndex={0}
								className='menu uppercase dropdown-content z-[1] p-2 shadow bg-colorOne rounded-box w-fit ml-4'
							>
								<ModalCountdown />
							</div>
						</div>

						<div className='dropdown dropdown-top self-center'>
							<label tabIndex={0} className='btn btn-ghost btn-square avatar'>
								<div className='w-11'>
									<Image src={clock} alt='icon' />
								</div>
							</label>
							<div
								tabIndex={0}
								className='menu dropdown-content z-[1] ml-16 p-2 shadow bg-colorOne rounded-full w-fit'
							>
								<Clock />
							</div>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
