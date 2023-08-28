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
			<div className="loading loading-infinity loading-lg text-info text-2xl "></div>
		);
	}

	return (
		<section className="self-start">
			<div>
				<div className="text-center font-Poppins ">
					<div className="pt-3 pb-3 flex justify-center bg-colorOne rounded text-colorFive shadow-colorFive">
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
			</div>
		</section>
	);
};

export default Calendar;
