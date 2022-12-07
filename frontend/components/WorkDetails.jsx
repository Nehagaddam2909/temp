const WorkDetails=({workout})=>{
    return (<div>
        <div>Title:{workout.title}</div>
        <div>Reps: {workout.reps}</div>
        <div>Load: {workout.load}</div>
        <div>Created On: {workout.createdAt}</div>
    </div>);
}

export default WorkDetails;