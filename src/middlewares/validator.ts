import { Schema } from "joi"
import {NextFunction, Request,Response} from 'express'

export const validateSchema= (schema:Schema)=>{
    return(req:Request,res:Response,next:NextFunction):void=>{
        const{error}= schema.validate(req.body)
        if(error){
            console.log('error from validator schema',error)
            const {details}=error
            const message=  details?.map((err)=>err.message.replace(/['"]+/g,'')).join(',')
            res.status(400).json({error:message})
        }
        else{
            console.log('schema verified correctly,go to next step')
            next()
        }
    }
}