//@ts-ignore
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  id: { type: Number, required: [true, "ID Required"] },
  todo: { type: String, required: [true, "Todo is required"] },
  completed: { type: Boolean, required: [true, "State its completion"] },
})

module.exports = mongoose.model("Todos", todoSchema)
