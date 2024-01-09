import styled from "styled-components"
import { OnlyStyledComponent } from "../../types"
import { useDispatch, useSelector } from "react-redux"
import { editUser, selectEditingError, selectUser } from "../../store"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from ".."
import { useState } from "react"
import { Navigate } from "react-router-dom"

const ProfileFormContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const user = useSelector(selectUser)
	const [edited, setEdited] = useState(false)
	const dispatch: any = useDispatch()
	const editError = useSelector(selectEditingError)

	const schema = yup.object().shape({
		email: yup
			.string()
			.required('Введите email')
			.default(user.email),
		name: yup
			.string()
			.required('Введите имя')
			.default(user.name),
		surname: yup
			.string()
			.required('Введите фамилию')
			.default(user.surname)
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const errorMessage = errors.email?.message || errors.name?.message || errors.name?.message || editError;

	if (!user.isAuth) return <Navigate to='/' />

	return (
		<form
			className={className}
			onChange={() => setEdited(true)}
		>
			<h3 className="title">Редактировать данные</h3>
			<label className="label" htmlFor="email">
				Электронная почта
				<input
					{...register('email', { required: true })}
					type="email"
					name="email"
					className="input"
					placeholder="example@mail.ru"
					defaultValue={user.email}
				/>
			</label>

			<label className="label" htmlFor="name">
				Имя
				<input
					{...register('name', { required: true })}
					type="text"
					name="name"
					className="input"
					placeholder="Иван"
					defaultValue={user.name}
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
					defaultValue={user.surname}
				/>
			</label>

			<Button
				margin="0 0 20px 0"
				disabled={!edited}
				onClick={handleSubmit(({ email, name, surname }) => {
					dispatch(editUser(email, name, surname))
					setEdited(false)
				})}
			>Сохранить</Button>

			<Button onClick={() => {
				localStorage.removeItem('token')
				window.location.reload()
			}}>Выйти из аккаунта</Button>

			{errorMessage && <div className="error">{errorMessage}</div>}

			{/* {editSuccess && (
				<div className="success">
					<p>Регистрация прошла успешно!</p>
					<SuccessIcon />
					<Link to='/login'>Войти в аккаунт</Link>
				</div>
			)} */}
		</form>
	)
}

export const ProfileForm = styled(ProfileFormContainer)`
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
