'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import ModalEvent from './ModalEvent';
import axios from 'axios';
import { toast } from 'react-toastify';

const localizer = momentLocalizer(moment);

const Diary = () => {
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const options = {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	};

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get('http://localhost:3001/events');
				setEvents(response.data);
			} catch (error) {
				console.error(error);
				toast.error('Error fetching events', options);
			}
		};

		fetchEvents();
	}, []);

	const handleSelectEvent = event => {
		setSelectedEvent(event);
		setIsEditing(false);
	};

	const handleAddEvent = async newEvent => {
		try {
			const response = await axios.post(
				'http://localhost:3001/events',
				newEvent
			);
			const newEventWithId = { ...newEvent, id: response.data.id };
			setEvents([...events, newEventWithId]);
			setIsEditing(false);
			setSelectedEvent(null);
			toast.success('Event successfully added', options);
		} catch (error) {
			console.log(error);
			toast.error('An error occurred while adding the event', options);
		}
	};

	const handleEditEvent = async updatedEvent => {
		try {
			await axios.put(
				`http://localhost:3001/events/${updatedEvent.id}`,
				updatedEvent
			);
			setEvents(prevEvents =>
				prevEvents.map(event =>
					event.id === updatedEvent.id ? updatedEvent : event
				)
			);
			setIsEditing(false);
			setSelectedEvent(null);
			toast.success('Event successfully updated', options);
		} catch (error) {
			console.error(error);
			toast.error('An error occurred while updating the event', options);
		}
	};

	const handleDeleteEvent = async eventToDelete => {
		try {
			await axios.delete(`http://localhost:3001/events/${eventToDelete.id}`);
			setEvents(prevEvents =>
				prevEvents.filter(event => event.id !== eventToDelete.id)
			);
			if (selectedEvent && selectedEvent.id === eventToDelete.id) {
				setSelectedEvent(null);
			}
			setIsEditing(false);
			toast.success('Event removed successfully', options);
		} catch (error) {
			console.error(error);
			toast.error('An error occurred while deleting the event', options);
		}
	};

	return (
		<section id='diary'>
			<div className='m-5 w-auto font-Poppins rounded text-colorSix min-h-screen'>
				<div>
					<div>
						<ModalEvent
							onAddEvent={handleAddEvent}
							onEditEvent={handleEditEvent}
							onDeleteEvent={handleDeleteEvent}
							event={selectedEvent}
							isOpen={isEditing}
							onClose={() => setIsEditing(false)}
						/>
						<Calendar
							localizer={localizer}
							events={events}
							onSelectEvent={handleSelectEvent}
							onSelectSlot={() => {
								setSelectedEvent(null);
								setIsEditing(true);
							}}
							startAccessor='start'
							endAccessor='end'
							style={{ height: 900 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Diary;
