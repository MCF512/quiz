import React, { useEffect } from 'react';
import { Container, Loader } from './components/UI';
import { CreateOrEditPage, LoginPage, MainPage, ProfilePage, QuizPage, RegisterPage, TestPage, UserTests } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAccessToken, getTests, selectLoading } from './store';

export const App: React.FC = () => {
	const loading = useSelector(selectLoading)
	const dispatch: any = useDispatch()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			dispatch(checkAccessToken(token))
		}
		dispatch(getTests())
	}, [])
	return (
		<Container>
			{loading && <Loader />}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/quiz/:id' element={<QuizPage />} />
					<Route path='/test/:id' element={<CreateOrEditPage />} />
					<Route path='/create/test' element={<CreateOrEditPage />} />
					<Route path='/test/results/:id' element={<TestPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/user/tests' element={<UserTests />} />
				</Routes>
			</BrowserRouter>
		</Container>
	)
}
