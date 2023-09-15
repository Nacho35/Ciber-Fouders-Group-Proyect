import Image from 'next/image';
import React from 'react';
import bot from '../../../public/images/robot.svg';

const ImageBotChat = () => {
	return (
		<div>
			<Image className='w-10 h-10' src={bot} alt='icon' />
		</div>
	);
};

export default ImageBotChat;
