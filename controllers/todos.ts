//@ts-ignore
const Todos = require("../models/todoModel")

//@ts-ignore
async function getAllTodos(req, res) {
  try {
    const results = await Todos.find()

    results ? res.status(200).send(results) : res.status(500).send("Error!")
  } catch (error) {}
}

module.exports = { getAllTodos }
