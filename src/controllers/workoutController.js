const workoutService = require("../services/workoutService.js");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts });
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId)
    res.send(`Get an existing workout ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
    const createWorkout = workoutService.createNewWorkout(req.params.workoutId)
    res.send(`Create a new workout ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId)
    res.send(`Update an existing workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`Delete an existing workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}