const express = require('express');
const app = express();
const PORT = process.env.port || 4000

app.get('/', (req, res) => {
    res.json({message: ""})
})

app.listen(() => console.log("Server listening on port: ", PORT))
