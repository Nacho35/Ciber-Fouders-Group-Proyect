'use client';
import React from 'react';

const Home = () => {
	return (
		<div id='background' className='hero min-h-screen font-Poppins'>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='w-auto md:w-3/5 lg:w-3/4'>
					<h1 className='mb-5 text-5xl font-bold uppercase '>
						Welcome to Fast Diary
					</h1>
					<p className='mb-5 text-justify'>
						Fast Diary is much more than a simple planner. Its a comprehensive
						web application that seamlessly combines a clock, a calendar, and a
						personalized notepad. With Fast Diary, keeping track of your events
						and tasks has never been easier and more efficient. Our unique
						feature is integration with ChatGPT, which automates your
						organization-related tasks. This means you can schedule events, set
						reminders, and jot down notes simply by conversing with your virtual
						assistant.
					</p>
					<a id='button-animation' href='#diary'>
						Get Started
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
