require("dotenv").config()
const TodosModel = require("../models/todoModel.ts")
const Todos = require("../db/todos.json")
//@ts-ignore
const connectDB = require("../db/connect.ts")
async function populate() {
  try {
    await connectDB(
      "mongodb+srv://zaid:12345@lots.b5vqnmm.mongodb.net/LOTSPRODUCTS?retryWrites=true&w=majority"
    )
    await TodosModel.create(Todos)
    console.log("Success")
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

populate()
