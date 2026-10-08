const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the logger middleware
app.use(loggerMiddleware);

// Basic route
app.get('/', (req, res) => {
    res.send('IFT 458 Middleware Lab is working!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});