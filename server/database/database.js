import mysql2 from "mysql2"

const db = mysql2.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "login",
})

db.connect((err) => {
	if (err) {
		console.log("Connection to database failed ", err)
	} else {
		console.log("Connection to database succes")
	}
})

export default db
