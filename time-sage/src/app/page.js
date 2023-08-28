import React, { Fragment } from "react";
import Calendar from "./components/Calendar.jsx";
import Clock from "./components/Clock.jsx";
import Diary from "./components/Diary.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

const page = () => {
	return (
		<Fragment>
			<div className="flex flex-col justify-center self-center overflow-hidden">
				<Navbar />
				<Home />
				<div className="self-center my-4 mx-4">
					<Clock />
				</div>
				<div className="pt-5 mx-4">
					<Calendar />
				</div>
				<div className="w-auto self-center">
					<Diary />
				</div>
				<Footer />
			</div>
		</Fragment>
	);
};

export default page;
