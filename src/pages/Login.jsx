import { useRef } from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault(); //prevent use of url to send elements of sign up
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get("email"), //calls the name prop on the inputs
			password: formData.get("password")

		}
		// console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" id="email" placeholder="platzi@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" id="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} type="submit" className="primary-button login-button">
					Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">
				Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;