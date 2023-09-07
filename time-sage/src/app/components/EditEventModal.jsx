'use client';
import React, { useState, useEffect } from 'react';

const EditEventModal = ({ event, onEditEvent }) => {
	const [eventTitle, setEventTitle] = useState('');
	const [startDate, setStartDate] = useState('');
	const [startTime, setStartTime] = useState('');
	const [finishDate, setFinishDate] = useState('');
	const [endTime, setEndTime] = useState('');
	const [isEventSelected, setIsEventSelected] = useState(false);

	useEffect(() => {
		if (event) {
			setEventTitle(event.title);
			setStartDate(event.start);
			setStartTime(event.start);
			setFinishDate(event.end);
			setEndTime(event.end);
			setIsEventSelected(true);
		} else {
			setEventTitle('');
			setStartDate('');
			setStartTime('');
			setFinishDate('');
			setEndTime('');
			setIsEventSelected(false);
		}
	}, [event]);

	const handleTitleChange = e => {
		setEventTitle(e.target.value);
	};

	const handleStartDateChange = e => {
		setStartDate(e.target.value);
	};

	const handleStartTimeChange = e => {
		setStartTime(e.target.value);
	};

	const handleFinishDateChange = e => {
		setFinishDate(e.target.value);
	};

	const handleEndTimeChange = e => {
		setEndTime(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (eventTitle && startDate && startTime && finishDate && endTime) {
			const editedEvent = {
				...event,
				title: eventTitle,
				start: new Date(`${startDate} ${startTime}`),
				end: new Date(`${finishDate} ${endTime}`),
			};

			onEditEvent(editedEvent);
		}
	};

	return (
		<div>
			{isEventSelected && (
				<label htmlFor='edit_modal' className='general-btn'>
					Edit Event
				</label>
			)}
			<input type='checkbox' id='edit_modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box'>
					<form method='post' onSubmit={handleSubmit} className='modal-content'>
						<label htmlFor='event' className='font-bold text-colorOne'>
							Event Title
						</label>
						<input
							type='text'
							name='event'
							id='event'
							value={eventTitle}
							onChange={handleTitleChange}
							placeholder='Nombre del evento'
							required
							className='input input-bordered w-full max-w-xs my-3'
						/>
						<label htmlFor='start-date' className='font-bold text-colorOne'>
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
						<label htmlFor='start-time' className='font-bold text-colorOne'>
							Start Time
						</label>
						<input
							type='time'
							name='start-time'
							id='start-time'
							value={startTime}
							onChange={handleStartTimeChange}
							required
							className='input input-bordered w-full max-w-xs my-3'
						/>
						<label htmlFor='finish-date' className='font-bold text-colorOne'>
							Finish Date
						</label>
						<input
							type='date'
							name='finish-date'
							id='finish-date'
							value={finishDate}
							onChange={handleFinishDateChange}
							required
							className='input input-bordered w-full max-w-xs my-3'
						/>
						<label htmlFor='ending-time' className='font-bold text-colorOne'>
							Ending Time
						</label>
						<input
							type='time'
							name='ending-time'
							id='ending-time'
							value={endTime}
							onChange={handleEndTimeChange}
							required
							className='input input-bordered w-full max-w-xs my-3'
						/>
						<div className='modal-action'>
							<div>
								<button className='btn' type='submit'>
									Save
								</button>
							</div>
							<div>
								<label htmlFor='edit_modal' className='btn'>
									Close
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditEventModal;
