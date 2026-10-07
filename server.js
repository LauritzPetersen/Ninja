const express = require('express');
const app = express();
app.use(express.json());

const standardRouter = require("./routes/standard")

const { logger } = require("./utils/logger");


const PORT = process.env.PORT || 3000;

app.use("", standardRouter);

// Get '/' message, to see if HTML is running
app.get('/', (req, res) => {
    res.json({message: "Backend is now running"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    logger.emit('start', 'Server startede');
});