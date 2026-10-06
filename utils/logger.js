const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('node:events');

const logger = new EventEmitter;

const logDir = path.join(__dirname, '..', 'logs');
const logFilePath = path.join(logDir, 'logs.log');




async function logEvent(message) {
    const datestamp = new Date().toLocaleDateString('da-DK');
    const timestamp = new Date().toLocaleTimeString('da-DK');
    const logMessage = `${datestamp} : ${timestamp} - ${message}\n`;

    try {
        await fs.appendFile(logFilePath, logMessage);
    } catch (err) {
        console.error('Fejl ved logning:', err);
    }
}

logger.on('log', async (method, url, status, info ) => {
    const message = `[${status}] ${method} ${url} - ${info}`;
    await logEvent(message);
});

logger.on('start', async (message) => {
    await logEvent(message);
});



module.exports = { logger };

