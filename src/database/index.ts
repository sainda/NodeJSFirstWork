import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:GQl5seXzHCq14nUk@cluster0.zneczh5.mongodb.net/todo-app")
    .then (()=>{
        console.log("mongoose connection done")
    })
    .catch (()=>{
        console.log("mongoose connection failed")
    })