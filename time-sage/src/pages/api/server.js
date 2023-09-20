const express = require('express');
const admin = require('firebase-admin');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const dotenv = require('dotenv');
const cors = require('cors');
const serviceAccount = require('../../keys/firestoreKeys.json');
const path = require('path');

dotenv.config();

const filePath = path.join(__dirname, '../../keys/key.json');

const app = express();
app.use(express.json());
app.use(cors());

const projectId = process.env.DIALOGFLOW_PROJECT_ID;

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	projectId,
});

const sessionClient = new dialogflow.SessionsClient({
	keyFilename: `${filePath}`,
});

app.post('/api/dialogflow', async (req, res) => {
	const sessionId = uuid.v4();
	const sessionPath = sessionClient.projectAgentSessionPath(
		projectId,
		sessionId
	);

	const request = {
		session: sessionPath,
		queryInput: {
			text: {
				text: req.body.text,
				languageCode: 'en-US',
			},
		},
	};

	try {
		const responses = await sessionClient.detectIntent(request);
		const result = responses[0].queryResult;
		console.log(`Query: ${result.queryText}`);
		console.log(`Response: ${result.fulfillmentText}`);
		console.log(`Intent: ${result.intent.displayName}`);

		let responseText = [];

		switch (result.intent.displayName) {
			case 'Default Welcome Intent':
				responseText.push('Hi! How are you doing?');
				responseText.push('Hello! How can I help you?');
				responseText.push('Good day! What can I do for you today?');
				responseText.push('Greetings! How can I assist?');
				break;
			case 'Calendar Talks':
				responseText.push(
					'To add an event to the calendar you must click on the add event button at the top left of the calendar section'
				);
				break;
			case 'Calendar Talks 2':
				responseText.push(
					'To delete an event you must select the event you want to delete and then click on the delete button located at the top left in the calendar section'
				);
				break;
			case 'Calendar Talks 3':
				responseText.push(
					'To edit an event you must select the event you want to edit and then click on the edit event button located at the top left in the calendar section'
				);
				break;
			case 'General questions':
				responseText.push(
					'This is a virtual agenda app called fast diary where users can add events and tasks, also using other tools to make their day simpler and stay organized'
				);
				responseText.push(
					'You can use the app to organize your time in your daily life by adding tasks and events for better organization, or how to also interact with these actions by editing and deleting them using also the tools that the app has to get an extra'
				);
				break;
			case 'Navigation':
				responseText.push(
					'To navigate between the sections of the app or navigate the site you must use the buttons found in the center of the navigation bar since the app has two sections, clicking on a button will take you to the corresponding section'
				);
				break;
			case 'Panel':
				responseText.push(
					'The app has three tools as extra functionalities for the user, it has a timer, a clock and a mini calendar. click the buttons to use them'
				);
				break;
			case 'Panel 2':
				responseText.push(
					'To access and use the extra functions of the app you must click on the hamburger button that is in the upper right part of the navigation bar, then that will display a sidebar where the functions are found. You must click on one of the three buttons to use the desired function'
				);
				break;
			case 'Task Talks':
				responseText.push(
					'To add a task, go to the upper left of the tasks section, enter the name of your task in the text field and press the button next to it that says add task'
				);
				break;
			case 'Task Talks 2':
				responseText.push(
					'To edit a task you must click on the pencil-shaped button at the end of the task.'
				);
				break;
			case 'Task Talks 3':
				responseText.push(
					'To delete a task you must click on the button at the end of the task in the shape of a trash can.'
				);
				break;
			case 'Default Fallback Intent':
				responseText.push('Can you say that again?');
				responseText.push('I missed what you said. What was that?');
				responseText.push('Sorry, could you say that again?');
				break;

			default:
				responseText = 'Sorry, I can t help you with that right now.';
		}

		responseText =
			responseText[Math.floor(Math.random() * responseText.length)];

		res.send({ response: responseText });
	} catch (error) {
		console.error('ERROR:', error);
		res.status(500).send({ error: 'Error processing the request.' });
	}
});

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(process.env.PORT, () => {
	console.log(`Hi Dev! Server running on port ${process.env.PORT}`);
});
