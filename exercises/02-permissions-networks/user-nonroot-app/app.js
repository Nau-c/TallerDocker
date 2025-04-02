const express = require("express");
const os = require("os");
const app = express();

app.get("/", (req, res) => {
  res.send(`Ejecutando como: ${os.userInfo().username}`);
});

app.listen(3000, () => {
  console.log("App escuchando en el puerto 3000");
});
