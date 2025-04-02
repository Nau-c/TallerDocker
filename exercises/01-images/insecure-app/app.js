
// ---

// ### 📄 `app.js`(para ambas apps)

// ```js
// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola desde la app en Docker 🐳");
});

app.listen(3000, () => {
    console.log("App escuchando en puerto 3000");
});
