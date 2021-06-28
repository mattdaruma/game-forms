const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
const express = require('express')
const cors = require('cors')
const app = express();
let jwt = require('jwt-simple');
const userData = {display: 'My Test User', roles: ['my-app-manager']}
app.use(cors());
app.use('/identity', (req, res, next)=>{
    res.set('content-type', 'text/json')
    res.send(JSON.stringify(jwt.encode(userData, config.jwtSecret)))
})
app.listen(4202, () => console.log('Now browse to localhost:4202/identity'));