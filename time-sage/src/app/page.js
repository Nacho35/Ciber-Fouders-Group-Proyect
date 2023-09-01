import React, { Fragment } from "react";
import Diary from "./components/Diary.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

const page = () => {
	return (
		<Fragment>
			<Navbar />
			<Home />
			<Diary />
			<Footer />
		</Fragment>
	);
};

export default page;
