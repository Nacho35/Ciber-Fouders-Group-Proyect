import React, { useState } from 'react';
import axios from 'axios';

const MyChatBot = () => {
	const [message, setMessage] = useState('');
	const [botReply, setBotReply] = useState([]);

	const handleUserMessage = async e => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:8080/api/dialogflow',
				{
					text: message,
				}
			);
			const botReply = response.data.response;

			setBotReply(botReply);
			setMessage('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{Array.isArray(botReply) ? (
				botReply.map((reply, index) => <p key={index}>{reply}</p>)
			) : (
				<p>{botReply}</p>
			)}
			<form onSubmit={handleUserMessage}>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
};

export default MyChatBot;
