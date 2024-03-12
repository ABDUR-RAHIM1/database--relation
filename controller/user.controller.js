const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().populate("todos")
        res.status(200).json({ users })
    } catch (error) {
        console.log(error)
    }
}


const addUsers = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        // Save user to database
        const newUser = await userModel({ name, email, password });
        const user = await newUser.save();

        res.status(201).json({
            message: "User added successfully",
            user
        });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const isUser = await userModel.findOne({ email })

        if (isUser && isUser.password === password) {
            res.status(200).json({
                message: "login successful",
                token: jwt.sign({
                    userId: isUser._id,
                    userName: isUser.name
                }, "abdurrahim")
            })
        } else {
            res.status(200).json({
                message: "Wrong Credential"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getUsers, addUsers, loginUser }