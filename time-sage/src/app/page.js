import React, { Fragment } from 'react';
import Diary from './components/Diary.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Tasks from './components/Tasks.jsx';
import { ToastContainer } from 'react-toastify';

const page = () => {
	return (
		<Fragment>
			<Navbar />
			<Home />
			<Diary />
			<Tasks />
			<Footer />
			<ToastContainer />
		</Fragment>
	);
};

export default page;
