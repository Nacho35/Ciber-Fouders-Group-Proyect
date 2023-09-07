import React from 'react';
import Diary from './components/Diary.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import { ToastContainer } from 'react-toastify';

const page = () => {
	return (
		<SmoothScroll>
			<Navbar />
			<Home />
			<Diary />
			<Footer />
			<ToastContainer />
		</SmoothScroll>
	);
};

export default page;
