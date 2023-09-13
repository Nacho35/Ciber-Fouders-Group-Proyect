import React from 'react';

function ChatBubble({ message, type }) {
	return (
		<div className={`chat-bubble chat-bubble-primary ${type}`}>
			<p>{message}</p>
		</div>
	);
}

export default ChatBubble;
