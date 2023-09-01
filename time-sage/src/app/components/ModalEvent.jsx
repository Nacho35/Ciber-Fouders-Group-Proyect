"use client";
import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const ModalEvent = ({
	onAddEvent,
	onEditEvent,
	onDeleteEvent,
	event,
	isOpen,
	onClose,
}) => {
	const [mounted, setMounted] = useState(false);
	const [eventTitle, setEventTitle] = useState("");
	const [startDate, setStartDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [finishDate, setFinishDate] = useState("");
	const [endTime, setEndTime] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (event) {
			setEventTitle(event.title);
			setStartDate(event.start);
			setStartTime(event.start);
			setFinishDate(event.end);
			setEndTime(event.end);
			setIsEditing(true);
		}
	}, [event]);

	if (!mounted) return null;

	const handleTitleChange = (e) => {
		setEventTitle(e.target.value);
	};

	const handleStartDateChange = (e) => {
		setStartDate(e.target.value);
	};

	const handleStartTime = (e) => {
		setStartTime(e.target.value);
	};

	const handleFinishDate = (e) => {
		setFinishDate(e.target.value);
	};

	const handleEndTime = (e) => {
		setEndTime(e.target.value);
	};

	const handleDelete = () => {
		onDeleteEvent(event);
		setIsDeleting(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("handleSubmit called");
		try {
			const newEvent = {
				title: eventTitle,
				start: new Date(`${startDate} ${startTime}`),
				end: new Date(`${finishDate} ${endTime}`),
			};
			await addDoc(collection(db, "events"), newEvent);
			onClose();
		} catch (error) {
			console.log(error);
		}

		if (isDeleting) {
			return;
		}

		if (isEditing) {
			onEditEvent({ ...newEvent, id: event.id });
		} else {
			onAddEvent(newEvent);
		}

		setIsEditing(false);
	};

	return (
		<div>
			<div>
				<label htmlFor="modal" className="btn btn-outline btn-primary mb-6">
					{isEditing && event ? "Edit Event" : "Add Event"}
				</label>
				{isEditing && (
					<button
						className="btn btn-outline btn-error mx-4"
						onClick={handleDelete}>
						Delete
					</button>
				)}
			</div>
			<input type="checkbox" id="modal" className="modal-toggle" />
			<div className="modal">
				<form className="modal-box text-colorSix font-Poppins font-medium flex flex-col items-center">
					<h3 className="font-bold text-lg text-colorOne">Event Title</h3>
					<input
						type="text"
						name="event"
						id="event"
						value={eventTitle}
						onChange={handleTitleChange}
						placeholder="Name of the event"
						className="input input-bordered w-full max-w-xs my-3"
					/>
					<h3 className="font-bold text-lg text-colorOne">Start Date</h3>
					<input
						type="date"
						name="start-date"
						id="start-date"
						value={startDate}
						onChange={handleStartDateChange}
						className="input input-bordered w-full max-w-xs my-3"
					/>
					<h3 className="font-bold text-lg text-colorOne">Start Time</h3>
					<input
						type="time"
						name="start-time"
						id="start-time"
						value={startTime}
						onChange={handleStartTime}
						className="input input-bordered w-full max-w-xs my-3"
					/>
					<h3 className="font-bold text-lg text-colorOne">Finish Date</h3>
					<input
						type="date"
						name="finish-date"
						id="finish-date"
						value={finishDate}
						onChange={handleFinishDate}
						className="input input-bordered w-full max-w-xs my-3"
					/>
					<h3 className="font-bold text-lg text-colorOne">Ending Time</h3>
					<input
						type="time"
						name="ending-time"
						id="ending-time"
						value={endTime}
						onChange={handleEndTime}
						className="input input-bordered w-full max-w-xs my-3"
					/>
					<div className="modal-action">
						<div>
							<button
								className="btn btn-outline btn-success mx-4"
								type="submit"
								id="submit"
								onClick={handleSubmit}>
								{isEditing && event ? "Edit Event" : "Add Event"}
							</button>
						</div>
						<div>
							<label htmlFor="modal" className="btn btn-outline btn-error">
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
