const express = require('express')
const path = require('path');
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`))