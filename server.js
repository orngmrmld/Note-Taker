const express = require('express');

const index = require('./routes/indexRoutes.js');
const notes = require('./routes/notesRoutes.js');

const PORT = process.env.PORT||3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', index);
app.use('/', notes);

app.use(express.static('public'));



app.listen(PORT, function(){
    console.log("App Listening on PORT" + PORT);
});
