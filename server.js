console.log("server.js is running");

const express = require("express"),
         port = 8000,
      DB_NAME = "planets",
          app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
