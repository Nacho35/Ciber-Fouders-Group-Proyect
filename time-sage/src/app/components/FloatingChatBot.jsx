'use client';
import React, { useState } from 'react';
import ChatBot from './MyChatBot';
import Image from 'next/image';
import message from '../../../public/images/message.svg';

function FloatingChatBot() {
	const [isChatOpen, setIsChatOpen] = useState(false);

	const handleChatOpen = () => {
		setIsChatOpen(true);
	};

	const handleChatClose = () => {
		setIsChatOpen(false);
	};

	return (
		<div className='fixed bottom-0 right-0 z-50 my-auto border-none'>
			{isChatOpen ? (
				<ChatBot onClose={handleChatClose} />
			) : (
				<button onClick={handleChatOpen} className='m-6'>
					<Image src={message} alt='icon' />
				</button>
			)}
		</div>
	);
}

export default FloatingChatBot;
