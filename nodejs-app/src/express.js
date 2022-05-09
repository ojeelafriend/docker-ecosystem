const express = require("express");
const app = express();

app.use(express.json(), express.urlencoded({ extended: false }));

module.exports = { app, express };
