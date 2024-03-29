const express = require("express")
require("dotenv").config()
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use("/notes",noteRouter)

app.listen(process.env.port, async() => {
	try {
		await connection
		console.log("Connected to DB")
		console.log(`Server is running at port ${process.env.port}`)
	} catch(err) {
		console.log(err)
	}
})