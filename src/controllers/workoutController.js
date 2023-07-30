const getAllWorkouts = (req, res) => {
    res.send("Get all workouts");
}

const getOneWorkout = (req, res) => {
    res.send(`Get an existing workout ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
    res.send(`Create a new workout ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) => {
    res.send(`Update an existing workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    res.send(`Delete an existing workout ${req.params.workoutId}`);
}

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };