const { getAllTodos } = require("../controllers/todos.ts")
//@ts-ignore
const express = require("express")
//@ts-ignore
const todosRouter = express.Router()

todosRouter.route("/").get(getAllTodos)

module.exports = todosRouter
