export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/add-invoice": [3],
		"/categories": [4],
		"/clients": [5],
		"/items": [6],
		"/login": [7],
		"/profile": [8],
		"/sellers": [9]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';