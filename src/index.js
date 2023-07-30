import express from "express";
// Routes
import v1WorkoutRouter from "./v1/routes/workOutRouter.js";

const app = express();
const PORT = process.env.PORT || 3004;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});