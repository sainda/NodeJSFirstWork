import { Router } from "express";
import { createTodo, getTodoById, updateTodo } from "../controllers/todoController";
import Joi from "joi";
import { validateSchema } from "../middlewares/validator";

const router: Router= Router()

const createTodoSchema=Joi.object({
    title:Joi.string().required(),
    description: Joi.string().required(),
})

const updateTodoSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string()
});

router.post('/todos/create',validateSchema(createTodoSchema),createTodo)
router.put('/todos/update/:id',validateSchema(updateTodoSchema),updateTodo)
router.get('/todos/get/:id', getTodoById);



export default router