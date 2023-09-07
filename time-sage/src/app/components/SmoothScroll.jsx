'use client';
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

const SmoothScroll = ({ children }) => {
	return (
		<PerfectScrollbar style={{ height: '100vh', width: '100vw' }}>
			{children}
		</PerfectScrollbar>
	);
};

export default SmoothScroll;
