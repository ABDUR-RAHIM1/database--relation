
const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
      title: { type: String, required: true },
      desc: { type: String, required: true },
      user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
      }
})


// Define instance method before creating the model
todoSchema.methods.getTitle = function () {
      return mongoose.model("Todo").find({ title: "title" });
  };

const todoModel = mongoose.model("Todo", todoSchema);
 

module.exports = todoModel

