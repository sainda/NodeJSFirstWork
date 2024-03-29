import {Request, Response } from 'express'
import Todo, { ITodo } from '../modals/todo'

export const createTodo = async (req:Request,res:Response):Promise<void>=>{
    try{
        console.log("welcome to create todo controller")
        const {title,description}= req.body

        if(!title){
            res.status(400).json({error:"title is required"})
        }

        if(!description){
            res.status(400).json({error:"description is required"})
        }
        const newTodo :ITodo = new Todo(
            {
                title,
                description
            }
        )
        console.log(newTodo)
        const savedTodo: ITodo = await newTodo.save()
        
        res.status(200).json({
            message:"Todo created successfully",
            data:savedTodo
        })
    }
    catch(error){
        res.status(400).json({
            error:'ERROR HAPPEN AT CREATE TODO!!'
        })
    }

}

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Welcome to update todo controller");
        
        const { id } = req.params;

        const { title, description } = req.body;

        const todoToUpdate: ITodo | null = await Todo.findByIdAndUpdate(id);

        if (!todoToUpdate) {
            console.error("Todo not found with ID:", id);
            res.status(404).json({ error: "Todo not found" });
            return;
        }

        if (title) {
            todoToUpdate.title = title;
        }
        if (description) {
            todoToUpdate.description = description;
        }

        const updatedTodo: ITodo = await todoToUpdate.save();

        res.status(200).json({
            message: "Todo updated successfully",
            data: updatedTodo
        });
    } catch (error) {
        res.status(400).json({
            error: 'ERROR HAPPEN AT UPDATE TODO!!'
        }); 
    }
}

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Welcome to update getById controller");

        const { id } = req.params

        const todo: ITodo | null = await Todo.findById(id)

        if (!todo) {
            res.status(404).json({ error: "Todo not found" })
            return;
        }

        res.status(200).json({
            message: " SUCCESS",
            data: todo
        });
    } catch (error) {
        res.status(500).json({
            error: 'ERROR: CAN NOT GET TODO'
        });
    }
}

