const express = require('express');
const app = express();
app.use(express.json());

const standardRouter = require("/routes/standard")

const { logger } = require("../utils/logger");
const fs = require('fs').promises;
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use("", standardRouter);

// Function for initServer
async function initServer() {
    try {
        await fs.mkdir(logDir, {recursive: true});

        if(initLogger) await initLogger();

    } catch (error) {
        console.error("Error initializing server", error);
    }
}

// Get '/' message, to see if HTML is running
app.get('/', (req, res) => {
    res.json({message: "Backend is running"});
});

// Start
initServer().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        logger.emit(`Server started on port ${PORT}`);
    });
});
