import { useState } from "react"
import { json } from "react-router-dom"
const WorkoutForm =()=>{

const [title,setTitle]=useState('')
const [load,setLoad]=useState('')
const [reps,setReps]=useState('')
const [err,setError]=useState()
const handle=async (e)=>{
    e.preventDefault()
    const workout={title,load,reps};
    const d=await fetch("http://localhost:4000/api/workouts",{
        method:"POST",
        body:JSON.stringify(workout),
        header:{
            'Content-type':"application/json"
        }
    })

    const jss=await d.json()
    if(d.Failure)
    {
        setError(d.Failure)
        console.log("Some errors")
    }
    else{
        setError(null)
        setTitle('')
        setReps()
        setLoad()
        console.log("Updated")
    }
}

return (<form onSubmit={handle}>
    Enter workout title<input type="text" onChange={(e)=>(setTitle(e.target.value))} value={title}></input>
    Enter load:<input type="text" onChange={(e)=>(setLoad(e.target.value))} value={load}></input>
    Enter reps:<input type="text" onChange={(e)=>(setReps(e.target.value))} value={reps}></input>
    <button>Add</button>
</form>)
}
export default WorkoutForm