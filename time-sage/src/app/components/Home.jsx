'use client';
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { homeAnimation } from '../animations';

const Home = () => {
	useEffect(() => {
		homeAnimation();
	}, []);

	return (
		<div id='background' className='hero min-h-screen'>
			<div id='home' className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center'>
				<div className='w-auto md:w-3/5 lg:w-3/4'>
					<h1
						id='title-home'
						className='mb-5 text-5xl font-bold uppercase text-colorFive '
					>
						Welcome to Fast Diary
					</h1>
					<p
						id='text-home'
						className='mb-5 text-justify leading-relaxed font-semibold text-colorFive lg:w-fit'
					>
						Fast Diary is much more than a simple planner. Its a comprehensive
						web application that seamlessly combines a clock, a calendar, a
						countdown timer, and a task list. With Fast Diary, keeping track of
						your events and tasks has never been easier and more efficient. Our
						unique feature is integration with Assistant AI, a chatbot that
						guides you through using the app and helps you understand its
						functionality. This means you can schedule events, set reminders,
						initiate countdowns, and manage your task list simply by conversing
						with your virtual assistant.
					</p>
					<div id='button-home'>
						<Link
							to='diary'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							className='bt-home'
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
