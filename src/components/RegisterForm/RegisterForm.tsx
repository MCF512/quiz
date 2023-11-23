import styled from "styled-components"
import { OnlyStyledComponent } from "../../types"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { Button, SuccessIcon } from ".."
import { ACTION, registerUser, selectRegisterError, selectRegisterSuccess } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const RegisterFormContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const dispatch: any = useDispatch()
	const registerError = useSelector(selectRegisterError)
	const registerSuccess = useSelector(selectRegisterSuccess)

	const schema = yup.object().shape({
		name: yup
			.string()
			.required('Введите имя'),
		surname: yup
			.string()
			.required('Введите фамилию'),
		email: yup
			.string()
			.required('Введите email'),
		password: yup
			.string()
			.required('Введите пароль')
			.min(5, 'Пароль должен содержать как минимум 5 символов')
			.max(30, 'Пароль должен быть не более 30 символов'),
		passcheck: yup
			.string()
			.required('Повторите пароль')
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const errorMessage = errors.email?.message || errors.password?.message || registerError

	useEffect(() => {
		dispatch({ type: ACTION.SET_REGISTER_SUCCESS, payload: false })
	}, [])

	return (
		<form
			className={className}
			onChange={() => {
				dispatch({ type: ACTION.SET_REGISTER_ERROR, payload: '' })
			}}
		>
			<h3 className="title">Регистрация</h3>
			<label className="label" htmlFor="name">
				Имя
				<input
					{...register('name', { required: true })}
					type="text"
					name="name"
					className="input"
					placeholder="Иван"
				/>
			</label>

			<label className="label" htmlFor="surname">
				Фамилия
				<input
					{...register('surname', { required: true })}
					type="text"
					name="surname"
					className="input"
					placeholder="Иванов"
				/>
			</label>

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

			<label className="label" htmlFor="passcheck">
				Повтор пароля
				<input
					{...register('passcheck', { required: true })}
					type="password"
					name="passcheck"
					className="input"
					placeholder="Повтор пароля"
				/>
			</label>

			<Button
				onClick={handleSubmit(({ email, password, name, surname }) => {
					dispatch(registerUser({ email, password, name, surname }))
				})}
			>Зарегистрироваться</Button>
			<p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>

			{errorMessage && <div className="error">{errorMessage}</div>}
			{registerSuccess && (
				<div className="success">
					<p>Регистрация прошла успешно!</p>
					<SuccessIcon />
					<Link to='/login'>Войти в аккаунт</Link>
				</div>
			)}
		</form >
	)
}

export const RegisterForm = styled(RegisterFormContainer)`
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
		height: 95%;
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
