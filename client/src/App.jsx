import {useEffect, useState} from "react"

const Users = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Melakukan fetch data dari endpoint /login
		fetch("http://localhost:3000/login")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data[0].data) // Mengakses data di dalam array dan objek JSON
				setLoading(false)
			})
			.catch((error) => {
				console.error("Error fetching data:", error)
				setLoading(false)
			})
	}, [])

	if (loading) {
		console.log(true)
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.user_id}>
						{user.email} - {user.pw}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
