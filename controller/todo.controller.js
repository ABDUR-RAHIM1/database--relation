const todoModel = require("../model/todo.model"); 
const userModel = require("../model/user.model.js");
 

const getTodo = async (req, res) => {
    try {
         const todos = await todoModel.find().populate("user" , "-password");
         res.status(200).json({ todos });
    } catch (error) {
        console.log(error);
    }
};

//  get todo using methods
const getTodoTitle = async(req, res)=>{
    const todo = new todoModel()
      const todosTitle = await todo.getTitle()
      res.status(200).json({
        todosTitle
      })
}



const addTodo = async(req, res)=>{
    const {title , desc} = req.body;
    const {userId} = req; 

    try {
         const newTodo = await todoModel({
              title ,
               desc,
               user: userId
         });
         const todo = await newTodo.save()
    
        await userModel.updateOne({
            _id : userId
         } , {
            $push : {
                 todos : todo._id
            }
         } )
         res.status(201).json({
            message :"add todo",
            todo : todo
         })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getTodo ,getTodoTitle , addTodo}