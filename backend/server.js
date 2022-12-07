const { urlencoded } = require('express')
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()

const workoutRoute=require("./routes/workouts")
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(urlencoded({extended:true}))

app.use("/api/workouts",workoutRoute)

app.use("/",(req,res)=>{
    res.send("<h1>HEllow world</h1>")
})

mongoose.connect(process.env.connect_str).then(e=>
{
    app.listen(process.env.PORT,()=>{
        console.log("Server started...!!!");
    });
}).catch(err=>{
    console.log(err)
})
