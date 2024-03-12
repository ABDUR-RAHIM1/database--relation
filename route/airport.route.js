 
 const {getUsers , addUsers, loginUser} = require("../controller/user.controller.js")
const authGuard = require("../midlewere/authGuard.js")
 

const router = require('express').Router()

router.get("/users", authGuard , getUsers)
router.post("/register", addUsers)
router.post("/login", loginUser )

module.exports = router;