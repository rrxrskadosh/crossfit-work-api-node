import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
    res.send(`<h1>Hello from ${req.baseUrl} Server Node</h1>`);
});

export default router;