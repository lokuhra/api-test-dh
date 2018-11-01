const express = require("express");
const Products = require("../models/products");
const Stages = require("../models/stages");

const AdHouseRouter = express.Router();

AdHouseRouter.route("/products/post").post((req, res) => {
  const adHouse = new Products({
    name: req.body.name,
    price: req.body.price,
    margin: req.body.port,
    sold: req.body.sold,
    stage: req.body.stage,
    picture: req.body.picture
  });
  adHouse
    .save()
    .then(() => {
      res.json("Server added successfully " + req.body.name);
    })
    .catch(err => {
      res.status(400).send(`unable to save to database${err}`);
    });
});

AdHouseRouter.route("/products").get((req, res) => {
  Products.find((err, adHouses) => {
    if (err) {
      console.log(err);
    } else {
      res.json(adHouses);
    }
  });
});

AdHouseRouter.route("/products/search/id/:id").get((req, res) => {
  const id = req.params.id;
  Products.findById(id, (err, adHouse) => {
    res.json(adHouse);
  });
});

AdHouseRouter.route("/products/search/stage/:stage").get((req, res) => {
  const stage = req.params.stage;
  Products.find({ stage: stage }, (err, adHouse) => {
    res.json(adHouse);
  });
});

AdHouseRouter.route("/products/update/:id").post((req, res) => {
  Products.findById(req.params.id, (err, adHouse) => {
    if (!adHouse) return next(new Error("Could not load Document"));
    else {
      adHouse.name = req.body.name;
      adHouse.price = req.body.price;
      adHouse.margin = req.body.port;
      adHouse.sold = req.body.sold;
      adHouse.stage = req.body.stage;
      adHouse.picture = req.body.picture;

      adHouse
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database" + err);
        });
    }
  });
});

AdHouseRouter.route("/products/delete/:id").get((req, res) => {
  Products.findByIdAndRemove({ _id: req.params.id }, err => {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

AdHouseRouter.route("/stages/post").post((req, res) => {
  const adHouse = new Stages({
    name: req.body.name,
    introduction: req.body.introduction,
    brief: req.body.brief
  });
  adHouse
    .save()
    .then(() => {
      res.json("Server added successfully " + req.body.name);
    })
    .catch(err => {
      res.status(400).send(`unable to save to database${err}`);
    });
});

AdHouseRouter.route("/stages").get((req, res) => {
  Stages.find((err, adHouses) => {
    if (err) {
      console.log(err);
    } else {
      res.json(adHouses);
    }
  });
});

AdHouseRouter.route("/stages/search/id/:id").get((req, res) => {
  const id = req.params.id;
  Stages.findById(id, (err, adHouse) => {
    res.json(adHouse);
  });
});

AdHouseRouter.route("/stages/search/name/:name").get((req, res) => {
  const name = req.params.name;
  Stages.find({ name: name }, (err, adHouse) => {
    res.json(adHouse);
  });
});

AdHouseRouter.route("/stages/update/:id").post((req, res) => {
  Stages.findById(req.params.id, (err, adHouse) => {
    if (!adHouse) return next(new Error("Could not load Document"));
    else {
      adHouse.name = req.body.name;
      adHouse.introduction = req.body.introduction;
      adHouse.brief = req.body.brief;

      adHouse
        .save()
        .then(() => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database" + err);
        });
    }
  });
});

AdHouseRouter.route("/stages/delete/:id").get((req, res) => {
  Stages.findByIdAndRemove({ _id: req.params.id }, err => {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = AdHouseRouter;
