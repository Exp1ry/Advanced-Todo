//@ts-ignore
async function getAllTodos(req, res) {
  res.status(200).send("Hello!")
}

module.exports = { getAllTodos }
