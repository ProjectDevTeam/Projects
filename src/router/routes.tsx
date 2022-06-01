import React from 'react';
import Home from '../views/Home';
import { RoutersType } from '../types';
import App from '../App';

const routes: RoutersType = [
	{
		path: '/',
		// element: <App />,
		redirect: '/app'
	},
	{
		path: 'home',
		element: <Home />
	},
	{
		path: 'app',
		element: <App />,
		children: [
			{
				path: '',
				redirect: 'home'
			},
			{
				path: 'home',
				element: <Home />
			}
		]
	}
];

export { routes };
