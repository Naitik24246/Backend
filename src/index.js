import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at PORT:${process.env.PORT} `)
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNECTION FAILED!!!:",error)
})































/*
import express from "express"
const app=express()
// IIFE Function:- It is a function that runs immediately after it is defined.
// Async Function:- For some tasks, like fetching data from a server, take time. 
// We don’t want the program to freeze while waiting. That’s where asynchronous functions help.
//  BASIC SYNTAX:[(()=>{})()]
( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{ ## Express ki app me error 
            console.log("ERROR: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on  the port ${process.env.PORT} `)
        })
    } catch (error){
        console.error("ERROR: ",error)
        throw error
    }    
})()
*/