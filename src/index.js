import express from "express";
import v1Router from "./v1/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3004;

app.use('/api/v1', v1Router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});