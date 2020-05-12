const express = require("express");

// const db = require("../data/dbConfig.js");


const server = express();

const router = require('../posts/customerRouter');

server.use(express.json());
server.use(logger);

//changed

server.use("/api/accounts", router);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

function logger(req, res, next) {
    console.log(req.method);
     console.log(req.url);
    console.log(Date.now());
    next();
    }


//changed

module.exports = server;
