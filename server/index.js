import express from "express"
import db from "./database/database.js"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
	const {email, password} = req.body

	const sql = "SELECT * FROM user WHERE email = ? AND pw = ?"
	db.query(sql, [email, password], (err, result) => {
		if (err) {
			res.status(500).json({
				message: "Error",
				preview: "Database query failed",
				data: null,
			})
		} else if (result.length > 0) {
			res.status(200).json({
				message: "Success",
				preview: "Login successful",
				data: result[0],
			})
		} else {
			res.status(401).json({
				message: "Failed",
				preview: "Invalid email or password",
				data: null,
			})
		}
	})
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
