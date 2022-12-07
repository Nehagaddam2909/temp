
const workout=require("../models/workout")


//get All the workouts
const getAllworkout=async (req,res)=>{
    const w=await workout.find()
    res.json(w)
}


//get particular workout

const getWorkoutById=async (req,res)=>{
    const {id}=req.params
    try
    {
        const w=await workout.findById(id)
        res.json(w)
    }
    catch(err)
    {
        res.json({"Failure":err})
    }
}



//Create the new workout
const CreateWorkout=async (req,res)=>{
    const {title,load,reps}=req.body
    try
    {
        const w=await workout.create({title,reps,load});
        res.json(w)
    }
    catch(err)
    {
        res.json({"Failure":err})
    }
}

//Delete by id
const DeleteWorkoutById=async(req,res)=>{
    const {id}=req.params
    try{
        const w=await workout.findOneAndDelete({_id:id})
        res.json(w)
    }catch(err)
    {
        res.json({"Failure":err})
    }
    

}

//Update by id

const UpdateWorkout=async(req,res)=>{
    const {id}=req.params
    const {title,load,reps}=req.body
    try{
        const w=await workout.findByIdAndUpdate({_id:id},{
            title:title,
            reps:reps,
            load:load
        })
        res.json(w)
    }catch(err)
    {
        res.json({"Failure":err})
    }
}
module.exports={
    CreateWorkout,
    getAllworkout,getWorkoutById,
    DeleteWorkoutById,
    UpdateWorkout
}