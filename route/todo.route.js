const { getTodo, addTodo, getTodoTitle } = require("../controller/todo.controller");
const authGuard = require("../midlewere/authGuard");

const router = require("express").Router()


router.get("/todos", authGuard , getTodo)
router.get("/todosTitle" , getTodoTitle)
router.post("/todos", authGuard , addTodo)

module.exports = router;