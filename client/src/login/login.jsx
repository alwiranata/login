// src/Login.js
import {useState} from "react"
import axios from "axios"
import "./login.css"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")

	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post("http://localhost:3000/login", {
				email,
				password,
			})
			setMessage(response.data.preview)
		} catch (error) {
			if (error.response) {
				setMessage(error.response.data.preview)
			} else {
				setMessage("Something went wrong")
			}
		}
	}

	return (
		<div className='login-container'>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>Email:</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Login</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	)
}

export default Login
