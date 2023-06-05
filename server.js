const express = require('express');
const path = require('path');
const api = require('./routes');

const PORT = process.env.PORT||3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// app.get('/apiRoutes', (req,res)=>
//     res.sendFile(path.join(__dirname, '/public/routes'))
// );

// app.get('/htmlRoutes',(req,res)=>
//     res.sendFile(path.join(__dirname, '/public/routes'))
// );

app.listen(PORT, function(){
    console.log("App Listening on PORT" + PORT);
});
