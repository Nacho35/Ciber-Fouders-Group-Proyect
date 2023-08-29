"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Diary = () => {
	return (
		<section id="diary">
			<div className="m-5 mt-10 w-auto font-Poppins rounded text-colorSix min-h-screen">
				<div className="">
					<div className="">
						<Calendar
							localizer={localizer}
							startAccessor="start"
							endAccessor="end"
							style={{ height: 900 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Diary;
