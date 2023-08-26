import React, { Fragment } from "react";
import Calendar from "./components/Calendar.jsx";
import Clock from "./components/Clock.jsx";
const page = () => {
	return (
		<Fragment>
			<div className="lg:flex justify-between overflow-hidden">
				<Calendar />
				<Clock />
			</div>
		</Fragment>
	);
};

export default page;
