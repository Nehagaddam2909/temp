import { useEffect,useState } from "react";
import WorkoutDetails from '../../components/WorkDetails'
import WorkoutForm from '../../components/WorkoutForm'

const Home=()=>{
const [workout,setWorkout]=useState()
useEffect(()=>{

    const fetchData=async ()=>{
        const data=await fetch("http://localhost:4000/api/workouts",{
            method:"GET",
            headers:{}
        })
        const d=await data.json()
        
       if(!d.Failure)
       {
            setWorkout(d)
       }
    }
    fetchData()
},[post])
   return( <div className="">
      {workout && workout.map((e)=>(
        <WorkoutDetails workout={e}></WorkoutDetails>
      ))}
      <WorkoutForm></WorkoutForm>
    </div>);
}

export default Home;