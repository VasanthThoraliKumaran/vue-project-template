const express = require("express");
const history = require("connect-history-api-fallback");
const app = express();
app.use(history());
app.use(express.static("/dist"));

app.get("/", (req, res) => {
  res.sendFile("/dist/index.html");
});

console.log("port: ", process.env.DEV_SERVER_PORT);
const port = 8080;
app.listen(port, () => console.log("server started"));
