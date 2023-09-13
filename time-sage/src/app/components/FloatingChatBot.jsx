'use client';
import React, { useState } from 'react';
import ChatBot from './ChatBot';
import Image from 'next/image';
import face from '../../../public/images/humanoid.svg';

function FloatingChatBot() {
	const [isChatOpen, setIsChatOpen] = useState(false);

	const handleChatOpen = () => {
		setIsChatOpen(true);
	};

	const handleChatClose = () => {
		setIsChatOpen(false);
	};

	return (
		<div className='fixed bottom-0 right-0 z-50  border-none'>
			{isChatOpen ? (
				<ChatBot onClose={handleChatClose} />
			) : (
				<button onClick={handleChatOpen} className='m-3'>
					<Image src={face} alt='icon' />
				</button>
			)}
		</div>
	);
}

export default FloatingChatBot;
