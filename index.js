const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');  
const router = require("./route/airport.route");
const todoRouter = require("./route/todo.route");
const sendMail = require("./controller/sendMail");
 

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const Port = 9000;

app.use("/api/sendmail" , sendMail)
app.use("/api", router)
app.use("/api", todoRouter)

 




const MONGO_URL = 'mongodb+srv://abrar:3NUfKV42ivL3fxNm@cluster0.ekd31bu.mongodb.net/practice2?retryWrites=true&w=majority'


app.listen(Port, async () => {
    console.log('Server is running');

    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database Is Connected")
    } catch (error) {
        console.log("Database is not Connected : ", error)
    }

})