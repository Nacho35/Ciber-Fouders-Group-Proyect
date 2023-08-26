"use client";
import React, { useState, useEffect } from "react";
import Time from "react-calendar";
import Image from "next/image";
import arrowleft1 from "../../../public/images/left-arrow (1).svg";
import arrowleft from "../../../public/images/left-arrow.svg";
import arrowright2 from "../../../public/images/right-arrow (1).svg";
import arrowright from "../../../public/images/right-arrow.svg";

const Calendar = () => {
	const [date, setDate] = useState(new Date());
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsClient(true);
		}
	}, []);

	if (!isClient) {
		return (
			<div className=" font-playfair text-colorTen text-2xl">Loading...</div>
		);
	}

	return (
		<div className="w-auto m-4 md:w-3/6 lg:w-3/6 xl:w-3/12">
			<div>
				<h1 className="text-center text-xl uppercase pb-3 font-bold font-playfair text-colorFive">
					TimeSege Calendar
				</h1>
				<div className="text-center font-playfair ">
					<div className="pt-3 pb-3 flex justify-center bg-colorOne rounded text-colorFive shadow-colorFive shadow-xl">
						<Time
							onChange={setDate}
							defaultValue={date}
							selectRange={true}
							defaultView="month"
							nextLabel={
								<Image src={arrowright2} alt="after month" className="m-auto" />
							}
							next2Label={
								<Image src={arrowright} alt="after year" className="m-auto" />
							}
							prevLabel={
								<Image src={arrowleft1} alt="before month" className="m-auto" />
							}
							prev2Label={
								<Image src={arrowleft} alt="before year" className="m-auto" />
							}
						/>
					</div>
				</div>
				{date.length > 0 ? (
					<p className="text-center font-playfair pt-4 uppercase font-bold">
						<span className="mr-2 ml-2 text-colorTen">Start:</span>
						{date[0].toDateString()}
						<span className="mr-2 ml-2 text-colorTen">End:</span>
						{date[1].toDateString()}
					</p>
				) : (
					<p className="text-center font-playfair pt-4 uppercase font-bold">
						<span className="text-colorTen mr-2">selected date:</span>
						{date.toDateString()}
					</p>
				)}
			</div>
		</div>
	);
};

export default Calendar;
