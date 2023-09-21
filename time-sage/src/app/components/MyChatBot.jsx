import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import bot from '../../../public/images/woman.svg';

const MyChatBot = ({ onClose }) => {
	const [message, setMessage] = useState('');
	const [botReply, setBotReply] = useState([]);
	const messagesEndRef = useRef(null);

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

			setBotReply(prevState => [...prevState, botReply]);
			setMessage('');
		} catch (error) {
			console.log(error);
		}
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [botReply]);

	return (
		<div className='m-4 grid grid-cols-1 max-w-md mx-4'>
			<div className='bg-colorEleven rounded-t-lg p-4 relative '>
				<button
					onClick={onClose}
					className='btn btn-md btn-ghost btn-circle absolute top-0 right-0 m-1'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				<h3 className='text-white flex uppercase text-center mt-1'>
					<Image className='mr-2' src={bot} alt='icon' />
					Sofi Virtual Assistant
				</h3>
			</div>
			<div className=' bg-colorFive p-4 max-h-96 overflow-y-auto rounded-b-lg'>
				{botReply.map((reply, index) => (
					<p
						key={index}
						className='place-self-start bg-colorOne text-colorFive p-2 rounded-md mb-2'
					>
						{reply}
					</p>
				))}
				<div ref={messagesEndRef} />
				<form className='flex justify-between' onSubmit={handleUserMessage}>
					<input
						className='input input-ghost w-full max-w-xs mr-2 text-colorSix  '
						type='text'
						placeholder='Ask me a question...'
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<button
						className='btn btn-active btn-primary text-colorFive p-2 rounded-md'
						type='submit'
					>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyChatBot;
