const express = require("express");
const app = express();

app.use(express.static("./"));

const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

// if not in production use the port 5000
const PORT = 3000;

console.log("server started on port:", PORT);
app.listen(PORT);
