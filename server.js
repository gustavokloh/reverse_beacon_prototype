var express = require('express'),
    app     = express();

app.configure(function () {
  app.use('/', express.static(__dirname));
})

// listen (start app with node server.js) ======================================
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
