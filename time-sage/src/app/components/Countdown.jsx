import React, { useState, useEffect } from 'react';

const Countdown = ({ initialHours, initialMinutes }) => {
	const [hours, setHours] = useState(initialHours || 0);
	const [minutes, setMinutes] = useState(initialMinutes || 0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			} else {
				if (minutes > 0) {
					setMinutes(minutes - 1);
					setSeconds(59);
				} else {
					if (hours > 0) {
						setHours(hours - 1);
						setMinutes(59);
						setSeconds(59);
					}
				}
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [hours, minutes, seconds]);

	const formatTime = time => {
		return time < 10 ? `0${time}` : time.toString();
	};

	const formattedHours = formatTime(hours);
	const formattedMinutes = formatTime(minutes);
	const formattedSeconds = formatTime(seconds);

	return (
		<div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
			<div className='flex flex-col p-2 bg-colorOne rounded-box text-neutral-content'>
				<span className='countdown font-mono text-5xl'>{formattedHours}</span>
				hours
			</div>
			<div className='flex flex-col p-2 bg-colorOne rounded-box text-neutral-content'>
				<span className='countdown font-mono text-5xl'>{formattedMinutes}</span>
				min
			</div>
			<div className='flex flex-col p-2 bg-colorOne rounded-box text-neutral-content'>
				<span className='countdown font-mono text-5xl'>{formattedSeconds}</span>
				sec
			</div>
		</div>
	);
};

export default Countdown;
