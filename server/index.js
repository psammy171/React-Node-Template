const express = require('express');
const path = require('path')
require('dotenv').config()

const app = express();
app.use(express.json())

const authRoutes = require('./Auth/Routes')

app.use('/api/auth', authRoutes)

app.use(express.static(path.join(__dirname , "..","dist","build")))


app.get('/api/test', (req,res) => {
    res.send('Welcome to future')
})

app.get('/*',(req, res) => {
    const filePath = path.join(__dirname , "..","dist/build/index.html");
    res.sendFile(filePath)
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}..`));