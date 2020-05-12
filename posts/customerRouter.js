const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.select("accounts")
      .from("accounts")
      .then(accounts => {
        res.status(200).json({ data: accounts });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });

  router.get("/:id", (req, res) => {
    db("accounts")
      .where({ id: req.params.id })
      .first() 
      .then(post => {
        if (post) {
          res.status(200).json({ data: post });
        } else {
          res.status(404).json({ message: "No posts by that ID" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });
  
