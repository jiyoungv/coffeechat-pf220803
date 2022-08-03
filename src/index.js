import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from "react-router-dom";
import 'react-app-polyfill/ie11'; // for ie11
import 'react-app-polyfill/stable'; // for ie11
import App from './App';
import ChatPay from './pages/ChatPay';
import CardView from './pages/CardView';
import CardRegister from './pages/CardRegister';
import CardChange from './pages/CardChange';
import cardInfoData from './tempData/cardInfoData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<Routes>
			<Route path='/' index element={<App />} />
			<Route path='/chat/pay' element={<ChatPay />} />
			<Route path='/chat/pay2' element={<ChatPay cardInfo={cardInfoData} />} />
			<Route path='/card/view' element={<CardView />} />
			<Route path='/card/view2' element={<CardView cardInfo={cardInfoData}/>} />
			<Route path='/card/register' element={<CardRegister />} />
			<Route path='/card/change' element={<CardChange />} />
		</Routes>
	</HashRouter>
);