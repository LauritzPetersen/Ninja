const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController")

router.get("/read-file", fileController.readFile);
router.post("/write-file", fileController.writeFile);



module.exports = router;