import { gsap } from 'gsap';

/** ANIMATIONS HOME */

export const homeAnimation = () => {
	gsap.fromTo(
		'#title-home',
		{ opacity: 0, y: -100 },
		{ y: 0, duration: 3, delay: 1.5, opacity: 1 }
	);

	gsap.fromTo(
		'#text-home',
		{ opacity: 0, y: -100 },
		{ y: 0, duration: 2, delay: 2, opacity: 1 }
	);

	gsap.fromTo(
		'#button-home',
		{ opacity: 0, y: 100 },
		{ y: 0, duration: 3, delay: 2.5, opacity: 1 }
	);
};

/** ANIMATIONS NAVBAR */

export const navAnimation = () => {
	gsap.fromTo(
		'#calendar',
		{
			y: -100,
		},
		{ y: 0, duration: 2, delay: 1.5 }
	);

	gsap.fromTo(
		'#fast',
		{
			y: -100,
		},
		{ y: 0, duration: 2, delay: 2 }
	);

	gsap.fromTo(
		'#task',
		{
			y: -100,
		},
		{ y: 0, duration: 2, delay: 2.5 }
	);
};
