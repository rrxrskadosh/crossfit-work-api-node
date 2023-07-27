const express = require("express");

const app = express();
const PORT = process.env.PORT || 3004

app.get("/", (req, res) => {
    res.send("<h1>Hello Server Node Express</h1>");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})