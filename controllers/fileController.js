const fs = require('fs').promises
const path = require('path');
const logDir = path.join(__dirname, '../data');
const logFilePath = path.join(logDir, 'text.txt');
const { logger } = require("../utils/logger");

async function readFile(req, res) {
    try{
        const data = await fs.readFile(logFilePath, 'utf8');
        res.status(200).send(data);

        logger.emit('log', req.method, req.url, 200, 'Filen blev læst');
    } catch (error) {
        res.status(500).send('Fejl 500 (server fejl): Filen kunne ikke findes');
        logger.emit('log', req.method, req.url, 500, `Filen blev ikke læst ${error}`);
    }
}

async function writeFile(req, res) {
    const content = req.body.content; //usikker ai ville bruge req.body.content

    if(!content) {
        logger.emit('log', req.method, req.url, 'Warning', 'Mangler text i requesten');
        return res.status(400).json({ fejl: 'Json skal indholde "content"'}); 
    }

    try {
        await fs.writeFile(logFilePath, content, 'utf8');
        res.status(200).json({ content: 'Filen blev opdateret! '});
    } catch (error) {
        logger.emit('log', req.method, req.url, 'Error', `Kunne ikke skrive til filen ${error}`);
        res.status(500).json({ fejl: `Fejl ved skrivning`})
    }
}

module.exports = { readFile, writeFile };