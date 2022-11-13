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
const TodosModel = require("../models/todoModel.ts");
//@ts-ignore
const Todos = require("../db/todos.json");
//@ts-ignore
const connectDB = require("../db/connect.ts");
function populate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectDB("mongodb+srv://zaid:12345@lots.b5vqnmm.mongodb.net/LOTSPRODUCTS?retryWrites=true&w=majority");
            yield TodosModel.create(Todos);
            console.log("Success");
            process.exit(0);
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    });
}
populate();
