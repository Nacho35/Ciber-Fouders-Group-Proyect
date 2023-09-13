import { Configuration, OpenAIApi } from 'openai-edge';
const dotenv = require('dotenv');

dotenv.config();

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

async function getChatbotResponse(prompt) {
	const chatGptMessages = [
		{
			role: 'system',
			content: 'You are a helpful assistant.',
		},
		{
			role: 'user',
			content: prompt,
		},
	];

	try {
		const res = await openai.createChatCompletion({
			messages: chatGptMessages,
			model: 'gpt-3.5-turbo',
		});

		console.log(res);
		return res?.data?.choices?.[0]?.message?.content ?? 'No response';
	} catch (error) {
		console.error('Error al enviar la solicitud a OpenAI:', error);
		throw error;
	}
}

module.exports = { getChatbotResponse };
