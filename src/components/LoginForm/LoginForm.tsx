import styled from "styled-components"
import { OnlyStyledComponent } from "../../types"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { Button, SuccessIcon } from ".."
import { ACTION, loginUser, selectLoginError, selectLoginSuccess } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const LoginFormContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const dispatch: any = useDispatch()
	const loginError = useSelector(selectLoginError);
	const loginSuccess = useSelector(selectLoginSuccess)

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Введите email'),
		password: yup
			.string()
			.required('Введите пароль')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const errorMessage = errors.email?.message || errors.password?.message || loginError;

	useEffect(() => {
		dispatch({ type: ACTION.SET_LOGIN_SUCCESS, payload: false })
	}, [])

	return (
		<form
			className={className}
			onChange={() => {
				dispatch({ type: ACTION.SET_LOGIN_ERROR, payload: '' })
			}}
		>
			<h3 className="title">Вход</h3>
			<label className="label" htmlFor="email">
				Электронная почта
				<input
					{...register('email', { required: true })}
					type="email"
					name="email"
					className="input"
					placeholder="example@mail.ru"
				/>
			</label>

			<label className="label" htmlFor="password">
				Пароль
				<input
					{...register('password', { required: true })}
					type="password"
					name="password"
					className="input"
					placeholder="Пароль"
				/>
			</label>

			<Button
				onClick={handleSubmit(({ email, password }) => {
					dispatch(loginUser({ email, password }))
				})}
			>Войти</Button>
			<p>Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link></p>

			{errorMessage && <div className="error">{errorMessage}</div>}

			{loginSuccess && (
				<div className="success">
					<p>Вы вошли в аккаунт!</p>
					<SuccessIcon />
					<Link to='/'>На главную</Link>
				</div>
			)}
		</form >
	)
}

export const LoginForm = styled(LoginFormContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #4e4e4e;
	padding: 20px;
	border-radius: 10px;
	max-width: 500px;
	margin: 0 auto;
	position: relative;

	& .title {
		font-size: 36px;
		margin: 0;
		margin-bottom: 30px;
	}

	& .label {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		width: 100%;
		font-size: 20px;
	}

	& .input {
		padding: 20px;
		font-size: 16px;
		border: 1px solid #4e4e4e;
		border-radius: 5px;
		margin-top: 5px;
	}

	& .error {
		background-color: red;
		color: #fff;
		width: 100%;
		text-align: center;
		padding: 10px;
		border-radius: 5px;
		font-size: 18px;
	}

	& .success {
		position: absolute;
		z-index: 9;
		padding: 20px;
		text-align: center;
		background-color: #fff;
		height: 93%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		p {
			font-size: 26px;
		}

		a {
			font-size: 20px;
		}
	}

`
