const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();

const PORT = process.env.NODE_APP_PORT


app.listen(PORT, () => {
    console.log('HTTP running in PORT:' + PORT)
})