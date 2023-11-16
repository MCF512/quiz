import React from 'react';
import { Container } from './components/UI';
import { MainPage, QuizPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/quiz' element={<QuizPage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	)
}
