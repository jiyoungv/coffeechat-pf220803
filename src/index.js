import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'react-app-polyfill/ie11'; // for ie11
import 'react-app-polyfill/stable'; // for ie11
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<Routes>
			<Route path='/' index element={<App />} />
		</Routes>
	</HashRouter>
);