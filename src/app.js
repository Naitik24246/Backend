import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
// WHEN WE USE MIDDLE WARES AND FOR CONFIGURATION SETTINGS WE OFTEN USE APP.USE()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))// when someone sends data in the form of json 

app.use(express.urlencoded({extended:true,limit:"16kb"}))//To store data from the URL in the backend 

app.use(express.static("public"))// To store pdf and images assests and show to to the browser

app.use(cookieParser())


export { app }