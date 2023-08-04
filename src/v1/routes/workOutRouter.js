// In src/v1/routes/workoutRoutes.js
const express = require("express");
const router = express.Router();

// Controllers 
const workoutController = require("../../controllers/workoutController.js")

router
    .get("/", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/", workoutController.createNewWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;