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
		<section className="flex">
			<div className="flex">
				<Watch
					className="bg-colorOne rounded-full"
					size={200}
					renderHourMarks={true}
					renderMinuteHand={true}
					renderMinuteMarks={false}
					renderNumbers={true}
					renderSecondHand={true}
					value={watch}
				/>
			</div>
		</section>
	);
};

export default Clock;
