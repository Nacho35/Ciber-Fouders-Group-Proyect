import Image from 'next/image';
import React from 'react';
import user from '../../../public/images/user-boy.svg';

const ImageUserChat = () => {
	return (
		<div>
			<Image className='w-10 h-10' src={user} alt='icon' />
		</div>
	);
};

export default ImageUserChat;
