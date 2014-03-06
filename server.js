var express = require('express'),
    app     = express();

app.configure(function () {
  app.use('/', express.static(__dirname));
})

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("<<<<<<<<<<<< App listening on port 8080");
