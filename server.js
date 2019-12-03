const express = require("express"),
     mongoose = require("mongoose"),
         port = 8000,
      DB_NAME = "planets",
          app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect(`mongodb://localhost/${DB_NAME}`);

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Planet name must 2 characters or more"]
    },
    color: {
        type: String,
        required: true
    },
    numMoons: {
        type: Number,
        required: true
    },
    hasRings: {
        type: Boolean,
        required: true
    },
    facts: []
}, {timestamps: true});

const Planet = mongoose.model("Planet", PlanetSchema);

app.get("/", function(req, res) {
    Planet.find({})
        .then(planets => res.render("index", {planets}))
        .catch(err => res.json(err));
});

app.post("/planet", function(req, res) {
    // only doing this because we have a checkbox...
    // seriously you don't need to do this if you don't
    req.body.hasRings = req.body.hasRings !== undefined;
    let planet = new Planet(req.body);
    planet.save()
        .then(() => res.redirect("/"))
        .catch(err => res.json(err));
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
