const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use('/', routes)



app.listen(5000, () => {
    console.log(`Server is listening to port ${PORT}`)
})


module.exports = app;