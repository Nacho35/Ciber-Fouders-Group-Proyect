'use client';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ModalEvent = ({ onAddEvent, onDeleteEvent, event, isOpen, onClose }) => {
	const [mounted, setMounted] = useState(false);
	const [eventTitle, setEventTitle] = useState('');
	const [startDate, setStartDate] = useState('');
	const [startTime, setStartTime] = useState('');
	const [finishDate, setFinishDate] = useState('');
	const [endTime, setEndTime] = useState('');

	useEffect(() => {
		setMounted(true);
		if (event) {
			setEventTitle(event.title);
			setStartDate(event.start);
			setStartTime(event.start);
			setFinishDate(event.end);
			setEndTime(event.end);
		}
	}, [event]);

	if (!mounted) return null;

	const handleTitleChange = e => {
		setEventTitle(e.target.value);
	};

	const handleStartDateChange = e => {
		setStartDate(e.target.value);
	};

	const handleStartTime = e => {
		setStartTime(e.target.value);
	};

	const handleFinishDate = e => {
		setFinishDate(e.target.value);
	};

	const handleEndTime = e => {
		setEndTime(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (eventTitle && startDate && startTime && finishDate && endTime) {
			const newEvent = {
				id: uuidv4(),
				title: eventTitle,
				start: new Date(`${startDate} ${startTime}`),
				end: new Date(`${finishDate} ${endTime}`),
			};
			onAddEvent(newEvent);
			onClose();
		}
	};

	const handleDelete = () => {
		onDeleteEvent(event);
		onClose();
	};

	return (
		<div>
			<div>
				<label htmlFor='modal' className='general-btn mb-6'>
					Add Event
				</label>
				{event && (
					<button className='general-btn-2 ml-6' onClick={handleDelete}>
						Delete
					</button>
				)}
			</div>
			<input type='checkbox' id='modal' className='modal-toggle' />
			<div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
				<form
					method='post'
					id='submit'
					onSubmit={handleSubmit}
					className='modal-box text-colorSix font-Poppins font-medium flex flex-col items-center'
				>
					<label htmlFor='event' className='font-bold text-lg text-colorOne'>
						Event Title
					</label>
					<input
						type='text'
						name='event'
						id='event'
						value={eventTitle}
						onChange={handleTitleChange}
						placeholder='Name of the event'
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<label
						htmlFor='start-date'
						className='font-bold text-lg text-colorOne'
					>
						Start Date
					</label>
					<input
						type='date'
						name='start-date'
						id='start-date'
						value={startDate}
						onChange={handleStartDateChange}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<label
						htmlFor='start-time'
						className='font-bold text-lg text-colorOne'
					>
						Start Time
					</label>
					<input
						type='time'
						name='start-time'
						id='start-time'
						value={startTime}
						onChange={handleStartTime}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<label
						htmlFor='finish-date'
						className='font-bold text-lg text-colorOne'
					>
						Finish Date
					</label>
					<input
						type='date'
						name='finish-date'
						id='finish-date'
						value={finishDate}
						onChange={handleFinishDate}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<label
						htmlFor='ending-time'
						className='font-bold text-lg text-colorOne'
					>
						Ending Time
					</label>
					<input
						type='time'
						name='ending-time'
						id='ending-time'
						value={endTime}
						onChange={handleEndTime}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<div className='modal-action'>
						<div>
							<button className='general-btn mx-4' type='submit' id='submit'>
								Add
							</button>
						</div>
						<div>
							<label htmlFor='modal' className='general-btn-2'>
								Close
							</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalEvent;
