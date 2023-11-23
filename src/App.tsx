import React, { useEffect } from 'react';
import { Container, Loader } from './components/UI';
import { EditPage, LoginPage, MainPage, ProfilePage, QuizPage, RegisterPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAccessToken, selectLoading } from './store';

export const App: React.FC = () => {
	const loading = useSelector(selectLoading)
	const dispatch: any = useDispatch()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			dispatch(checkAccessToken(token))
		}
	}, [])
	return (
		<Container>
			{loading && <Loader />}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/quiz' element={<QuizPage />} />
					<Route path='/edit' element={<EditPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</Container>
	)
}
