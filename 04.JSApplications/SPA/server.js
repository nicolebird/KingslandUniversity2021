const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 1112, () => console.log("Server running ..."));
//type localhost:1111 into the browser to get it to load after typing node server.js into the VS code terminal