const express = require('express');

export const app = express();

app.engine('html', require("ejs").renderFile)

app.set('port', 3000);

app.get("/", (req, res) => app.use(express.static("./main.html", {text: req.query.text, origin: req.headers.origin})));


app.listen(app.get('port'), () => console.log("Server ready on port 3000."));
