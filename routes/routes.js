const db = require("../Develop/db/db.json");
module.exports = function(app) {

    app.get("/api/notes/", function(req,res) {
        res.json(db);
    });

    app.post("/api/notes/", function(req,res){
        db.push(req.body);
        res.json(true);
    })

    app.delete("/api/notes/", function(req,res){
        db.length = 0;
        res.json({ok: true});
    })
};

const path = require("path");
module.exports = function(app) {

    app.get("/notes", function(req,res) { 
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

};