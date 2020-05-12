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
          res.status(404).json({ message: "No accounts by that ID" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });
  
  router.post("/", (req, res) => {
    const account = req.body;
  
    if (isValidPost(account)) {
      db("accounts")
        .insert(account, "id")
        .then(ids => {
          res.status(201).json({ data: ids });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ message: error.messsage });
        });
    } else {
      res
        .status(400)
        .json({ message: "please provide info for the account" });
    }
  });

  router.put("/:id", (req, res) => {
    const changes = req.body;
  
    db("account")
      .where({ id: req.params.id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ data: count });
        } else {
          res.status(404).json({ message: "record not found by that Id" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });

  router.delete("/:id", (req, res) => {
    db("account")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count > 0) {
          res.status(200).json({ data: count });
        } else {
          res.status(404).json({ message: "record not found by that Id" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: error.messsage });
      });
  });






  function isValidPost(post) {
    return Boolean(post.name && post.budget);
  }