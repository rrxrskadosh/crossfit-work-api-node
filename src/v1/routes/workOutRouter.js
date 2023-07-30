// In src/v1/routes/workoutRoutes.js
import express from 'express';
const router = express.Router();

// Controllers 
import workoutController from "../../controllers/workoutController.js"

router
    .get("/", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/", workoutController.createNewWorkout)
    .patch("/:workoutId", workoutController.updateOneWorkout)
    .delete("/:workoutId", workoutController.deleteOneWorkout);

export default router;