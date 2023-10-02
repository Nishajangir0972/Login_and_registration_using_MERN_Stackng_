import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
import EmployeeModel from "./models/Employee.js";

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/register' , (req ,res)=>{
EmployeeModel.create(req.body)
.then(employees => res.json(employees))
.catch(err => res.json(err))
})

app.listen(4000 , ()=> {
    console.log("server is running")
})