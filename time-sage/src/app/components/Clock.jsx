"use client";
import React, { useEffect, useState } from "react";
import Watch from "react-clock";

const Clock = () => {
	const [watch, setWatch] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setWatch(new Date()), 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<section className="flex flex-col items-center md:self-end md:m-auto md:mt-4 md:absolute md:top-0 md:right-0 lg:self-end lg:m-auto lg:mt-4 lg:absolute lg:top-0 lg:right-0">
			<aside className="flex mr-4">
				<Watch
					className="bg-colorOne rounded-full"
					size={250}
					renderHourMarks={true}
					renderMinuteHand={true}
					renderMinuteMarks={false}
					renderNumbers={true}
					renderSecondHand={true}
					value={watch}
				/>
			</aside>
		</section>
	);
};

export default Clock;
