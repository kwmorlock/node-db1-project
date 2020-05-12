const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

//changed

server.use("/api/data", db);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

//changed

module.exports = server;
