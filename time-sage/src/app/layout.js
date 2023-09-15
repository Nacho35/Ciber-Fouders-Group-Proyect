/* eslint-disable react/react-in-jsx-scope */
import './globals.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import 'react-chatbot-kit/build/main.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Fast Diary',
	description: 'Virtual Calendar',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
