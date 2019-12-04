console.log("routes.js is running");
const Planets = require("../controllers/planets");

module.exports = function(app) {
    app.get("/", Planets.index);
    app.post("/planet", Planets.create);
    app.get("/planet/:_id", Planets.edit);
    app.post("/planet/:_id", Planets.update);
}