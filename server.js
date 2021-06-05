const express = require("express");
import { appConfig } from "./src/app.config";
const history = require("connect-history-api-fallback");
const app = express();
app.use(history());
app.use(express.static("/dist"));

app.get("/", (req, res) => {
  res.sendFile("/dist/index.html");
});

app.listen(appConfig.port.dev_server, () => console.log("server started"));
