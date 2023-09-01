"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ModalEvent from "./ModalEvent";
import { eventsCollection } from "../firebase";
import { addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const localizer = momentLocalizer(moment);

const Diary = () => {
	const [events, setEvents] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const handleSelectEvent = (event) => {
		setSelectedEvent(event);
		setIsEditing(true);
	};

	const getEvents = async () => {
		const eventsRef = eventsCollection;
		const querySnapshot = await getDocs(eventsRef);
		const eventsData = querySnapshot.docs.map((doc) => doc.data());
		return eventsData;
	};

	const handleAddEvent = async (newEvent) => {
		try {
			const docRef = await addDoc(eventsCollection, newEvent);
			setEvents([...events, { ...newEvent, id: docRef.id }]);
		} catch (error) {
			console.error("Error adding event: ", error);
		}
	};

	const handleEditEvent = async (updatedEvent) => {
		try {
			await updateDoc(eventsCollection, updatedEvent.id, updatedEvent);
			setEvents(
				events.map((event) =>
					event.id === updatedEvent.id ? updatedEvent : event
				)
			);
			setSelectedEvent(null);
			setIsEditing(false);
		} catch (error) {
			console.error("Error editing event: ", error);
		}
	};

	const handleDeleteEvent = async (eventToDelete) => {
		try {
			await deleteDoc(eventsCollection, eventToDelete.id);
			setEvents(events.filter((event) => event.id !== eventToDelete.id));
			setSelectedEvent(null);
			setIsEditing(false);
		} catch (error) {
			console.error("Error deleting event: ", error);
		}
	};

	return (
		<section id="diary">
			<div className="m-5 w-auto font-Poppins rounded text-colorSix min-h-screen">
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
							getEvents={getEvents}
							onSelectEvent={handleSelectEvent}
							onSelectSlot={() => {
								setSelectedEvent(null);
								setIsEditing(true);
							}}
							startAccessor="start"
							endAccessor="end"
							style={{ height: 900 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Diary;
