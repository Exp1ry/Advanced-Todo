"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("dotenv").config();
//@ts-ignore
const connectDB = require("./db/connect.js");
// Imports
//@ts-ignore
const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const app = express();
app.use(express.static("public"));
// Route Imports
//@ts-ignore
const todosRouter = require("./routers/todos.js");
// Routes
app.use("/todos", todosRouter);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            yield connectDB(process.env.MONGO_URI);
            app.listen(process.env.PORT, console.log(`Listening to ${process.env.PORT}...`));
        }
        catch (error) {
            console.log(error);
        }
    });
}
start();
