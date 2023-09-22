import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import bot from '../../../public/images/woman.svg';
import user from '../../../public/images/user.svg';
import send from '../../../public/images/send.svg';

const MyChatBot = ({ onClose }) => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const [isBotResponding, setIsBotResponding] = useState(false);
	const messagesEndRef = useRef(null);

	const handleUserMessage = async e => {
		e.preventDefault();

		try {
			const userMessage = {
				text: message,
				sender: 'user',
				time: getCurrentTime(),
			};
			setMessages(prevMessages => [...prevMessages, userMessage]);
			setMessage('');

			setIsBotResponding(true);

			setTimeout(async () => {
				const response = await axios.post(
					'http://localhost:8080/api/dialogflow',
					{
						text: message,
					}
				);
				const botReply = response.data.response;

				const botMessage = {
					text: botReply,
					sender: 'bot',
					time: getCurrentTime(),
				};

				setMessages(prevMessages => [...prevMessages, botMessage]);

				setIsBotResponding(false);

				sessionStorage.setItem(
					'chatMessages',
					JSON.stringify([...messages, userMessage, botMessage])
				);
			}, 500);
		} catch (error) {
			console.log(error);
			setIsBotResponding(false);
		}
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const getCurrentTime = () => {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	useEffect(scrollToBottom, [messages]);

	useEffect(() => {
		const storedMessages = sessionStorage.getItem('chatMessages');
		if (storedMessages) {
			setMessages(JSON.parse(storedMessages));
		}
	}, []);

	return (
		<div className='m-4 grid grid-cols-1 max-w-md mx-4'>
			<div className='bg-colorEleven rounded-t-lg p-4 relative'>
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

				<h3 className='text-white flex uppercase text-center mt-1 font-semibold'>
					<Image className='mr-2' src={bot} alt='icon' />
					Sofi Virtual Assistant
				</h3>
			</div>
			<div className='bg-colorFive p-4 h-96 overflow-y-auto'>
				{messages.map((message, index) => (
					<div
						key={`message-${index}`}
						className={`chat chat-${
							message.sender === 'user' ? 'end' : 'start'
						}`}
					>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-full text-colorSix'>
								<Image
									src={message.sender === 'bot' ? bot : user}
									alt='Avatar'
								/>
							</div>
						</div>
						<div className='chat-header text-colorSix'>
							{message.sender === 'user' ? 'You' : 'Sofi Virtual Assistant'}
							<time className='text-xs ml-1 text-colorSix'>{message.time}</time>
						</div>
						<div
							className={`chat-bubble chatstyle ${
								message.sender === 'user' ? 'user' : 'bot'
							}`}
						>
							{message.text}
						</div>
						<div className='p-3'></div>
					</div>
				))}
			</div>
			<div ref={messagesEndRef} />
			<div className='bg-colorFive rounded-b-lg'>
				<form className='flex justify-between p-4' onSubmit={handleUserMessage}>
					<input
						className='input input-ghost w-full max-w-xs mr-2 text-colorSix'
						type='text'
						placeholder='Ask me a question...'
						value={message}
						onChange={e => setMessage(e.target.value)}
						disabled={isBotResponding}
					/>
					<button
						className='btn btn-circle btn-active btn-outline btn-success p-2 rounded-md'
						type='submit'
						disabled={isBotResponding}
					>
						<Image src={send} alt='icon' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyChatBot;
