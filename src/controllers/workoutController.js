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
    const { body } = req;

    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
      }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    }
    const createWorkout = workoutService.createNewWorkout()
    res.status(201).send(`Create a new workout ${req.params.workoutId}`);
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