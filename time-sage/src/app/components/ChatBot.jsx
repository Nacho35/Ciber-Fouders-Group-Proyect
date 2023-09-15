import React from 'react';
import { Chatbot, createChatBotMessage } from 'react-chatbot-kit';
import messageParser from './MessageParser';
import actionProvider from './ActionProvider';
import ImageBotChat from './ImageBotChat';
import ImageUserChat from './ImageUserChat';

function CustomHeader({ onClose }) {
	return (
		<div className='flex flex-row justify-between p-2'>
			<div className='flex flex-row self-start m-auto'>
				<h3 className='text-colorSix flex flex-row justify-start'>
					Clara Assistant
				</h3>
			</div>
			<button onClick={onClose} className='btn btn-circle btn-sm btn-ghost'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='#7286D3'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	);
}

function ChatBot({ onClose }) {
	const botName = 'Clara';
	const config = {
		initialMessages: [
			createChatBotMessage(`Hi! I'm ${botName} I’m here to help you`),
		],
		botName: 'Clara',
		customStyles: {
			botMessageBox: {
				backgroundColor: '#7286D3',
			},
			chatButton: {
				backgroundColor: '#7286D3',
			},
		},
		customComponents: {
			header: props => <CustomHeader onClose={onClose} />,
			userAvatar: props => <ImageUserChat {...props} />,
			botAvatar: props => <ImageBotChat {...props} />,
		},
	};

	return (
		<div className='fixed bottom-0 right-0 m-4'>
			<Chatbot
				actionProvider={actionProvider}
				messageParser={messageParser}
				config={config}
			/>
		</div>
	);
}

export default ChatBot;
