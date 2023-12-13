import styled from "styled-components"
import { OnlyStyledComponent } from "../../../types"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsAuth } from "../../../store"

const HeaderContainer: React.FC<OnlyStyledComponent> = ({ className }) => {
	const isAuth = useSelector(selectIsAuth)
	const navigate = useNavigate()

	return (
		<header className={className}>
			<Link to="/">Главная</Link>

			{isAuth && <div className="wrapper">
				<Link to="/user/tests">Мои тесты</Link>
			</div>}

			<button
				className="login"
				onClick={() => navigate(`${isAuth ? '/profile' : '/login'}`)}
			>
				{!isAuth ? 'Войти' : 'Профиль'}
			</button>
		</header>
	)
}


export const Header = styled(HeaderContainer)`
	background-color: #4e4e4e;
	padding: 20px;
	display: flex;
	align-items: center;
	border-radius: 0 0 5px 5px;
	margin-bottom: 25px;

	a {
		color: #fff;
		font-weight: bold;
		text-decoration: none;
		transition: opacity 0.3s;
		margin-right: 10px;

		&:hover {
			opacity: 0.5;
		}
	}

	& .login {
		margin-left: auto;
		background-color: #fff;
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		font-weight: bold;
		color: #4e4e4e;
		transition: opacity 0.3s;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}

	}
`
