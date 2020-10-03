const express = require("express"),
      path = require("path"),
      app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => {
    console.log("Running on " + port)
})