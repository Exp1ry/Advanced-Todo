//@ts-ignore
const { getAllTodos } = require("../controllers/todos.js")
//@ts-ignore
const express = require("express")
//@ts-ignore
const todosRouter = express.Router()

todosRouter.route("/").get(getAllTodos)

module.exports = todosRouter
