import express from "express"
import db from "./database/database.js"

const app = express()
const port = 3000

app.get("/login", (req, res) => {
	const sql = "SELECT * FROM user"
	db.query(sql, (err, result) => {
		if (err) {
			res.status(500).json({
				message: "Error",
				preview: "Database Failed",
				data: "null",
			})
		} else {
			res.status(200).json([
				{
					message: "Success",
					preview: "User list retrieved successfully",
					data: result,
				},
			])
		}
	})
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
