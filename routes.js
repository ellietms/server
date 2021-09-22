const express =  require('express');
const { route } = require('./server');
const router = express.Router();
const URI = process.env.URI;


router.get("/about", (req,res) => {
    res.send("ABOUT PAGE");
})





module.exports = router