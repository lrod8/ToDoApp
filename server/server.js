const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

//serves the static files -- express.static goes last
app.use(express.static('src'));
/*
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'src')));
*/

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})