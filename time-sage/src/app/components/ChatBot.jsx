import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { getChatbotResponse } from '../../api/chat/bot';
import Image from 'next/image';
import user from '../../../public/images/user-boy.svg';
import cross from '../../../public/images/cross-chat.svg';

function ChatBot({ onClose }) {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const chatContainerRef = useRef(null);

	const handleSendMessage = async () => {
		setMessages([...messages, { type: 'user', text: newMessage }]);
		const response = await getChatbotResponse(newMessage);
		setMessages([...messages, { type: 'bot', text: response }]);
		setNewMessage('');
	};

	useEffect(() => {
		chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
	}, [messages]);

	return (
		<div className='fixed bottom-0 right-0 m-4 border-none'>
			<div
				className='bg-colorEleven rounded'
				style={{
					maxHeight: '400px',
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column-reverse',
				}}
				ref={chatContainerRef}
			>
				<button
					className='border-none bg-transparent text-white self-end top-0 right-0 mx-6 my-auto absolute'
					onClick={onClose}
				>
					<Image src={cross} alt='icon' />
				</button>
				{messages.map((message, index) => (
					<div className={`chat self-start m-3 ${message.type}`} key={index}>
						<div className='chat-image avatar'>
							<div className='w-10 rounded-none'>
								<Image src={user} alt='Avatar' />
							</div>
						</div>
						<div className='chat-header text-start'>
							{message.sender}
							<time className='text-xs opacity-50'>{message.time}</time>
						</div>
						<ChatBubble message={message.text} type={message.type} />
						<div className='chat-footer opacity-50'>{message.footer}</div>
					</div>
				))}
			</div>
			<div className='flex flex-row items-center mt-2'>
				<input
					type='text'
					placeholder='Type a message...'
					value={newMessage}
					onChange={e => setNewMessage(e.target.value)}
					className='input input-bordered w-full max-w-xs flex-grow text-colorSix'
				/>
				<button
					className='btn btn-primary ml-1 relative'
					onClick={handleSendMessage}
				>
					Send
				</button>
			</div>
		</div>
	);
}

export default ChatBot;
