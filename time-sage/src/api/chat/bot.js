import { Configuration, OpenAIApi } from 'openai-edge';
require('dotenv').config();

const configuration = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { message } = req.body;

		const chatGptMessages = [
			{
				role: 'system',
				content: 'You are a helpful assistant.',
			},
			{
				role: 'user',
				content: message,
			},
		];

		try {
			const response = await openai.createChatCompletion({
				messages: chatGptMessages,
				model: 'gpt-3.5-turbo',
			});

			res
				.status(200)
				.json({ message: response.data.choices[0].message.content });
		} catch (error) {
			console.error('Error al enviar la solicitud a OpenAI:', error);
			res.status(500).json({ error: 'Hubo un error al procesar tu solicitud' });
		}
	} else {
		res.status(405).json({ error: 'Sólo se permiten solicitudes POST' });
	}
}

// export async function getChatbotResponse(message) {
// 	try {
// 		const response = await fetch('https://api.openai.com/v1/chat/completions', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ message }),
// 		});

// 		if (!response.ok) {
// 			throw new Error('Error al enviar la solicitud');
// 		}

// 		const data = await response.json();
// 		return data.message;
// 	} catch (error) {
// 		console.error('Error al enviar la solicitud:', error);
// 		throw error;
// 	}
// }
