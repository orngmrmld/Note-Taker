const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT||3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public/"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App Listening on PORT" + PORT);
});
