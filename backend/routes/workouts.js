const express=require("express")
const routes=express.Router()
const {CreateWorkout,getAllworkout,getWorkoutById,DeleteWorkoutById, UpdateWorkout}=require("../controllers/createWorkout")

//Get all the workouts
routes.get("/",getAllworkout)
//Get only specified workout

routes.get("/:id",getWorkoutById)


//POst new workout

routes.post("/",CreateWorkout)

//Delete a workout
routes.delete("/:id",DeleteWorkoutById)

//Update the workout

routes.patch("/:id",UpdateWorkout)
module.exports=routes