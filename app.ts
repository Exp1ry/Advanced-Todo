require("dotenv").config()
//@ts-ignore
const connectDB = require("./db/connect.ts")
// Imports
//@ts-ignore
const express = require("express")
const cors = require("cors")
const bp = require("body-parser")
const app = express()

// Route Imports
//@ts-ignore
const todosRouter = require("./routers/todos.ts")

async function start() {
  try {
    //@ts-ignore
    await connectDB(process.env.MONGO_URI)
    app.listen(
      process.env.PORT,
      console.log(`Listening to ${process.env.PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
