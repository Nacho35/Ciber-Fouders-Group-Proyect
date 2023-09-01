"use client";
import React, { useEffect, useState } from "react";
import Watch from "react-clock";

const Clock = () => {
	const [watch, setWatch] = useState(new Date());
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => setWatch(new Date()), 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

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
