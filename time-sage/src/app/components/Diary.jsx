"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Diary = () => {
	return (
		<div className="m-5 w-auto font-Poppins lg:mt-4 lg:self-center md:mt-4 rounded text-colorSix">
			<div className="card card-body rounded ">
				<div className="">
					<Calendar
						localizer={localizer}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500 }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Diary;
