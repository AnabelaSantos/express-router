const express = require("express");
const router = express.Router();

let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

router.get("/", (req, res) => {
  res.json(fruits);
});

router.get("/:id", (req, res) => {
  const fruit = fruits[req.params.id - 1];
  res.json(fruit);
});

router.use(express.json());
router.post("/", (req, res) => {
  const fruit = { name: req.body.name, color: req.body.color };
  fruits.push(fruit);
  res.json(fruits);
});

router.use(express.json());
router.put("/:id", (req, res) => {
  let index = Number(req.params.id);
  let fruit = [];
  let newEntry = { name: req.body.name, color: req.body.color };
  for (let i = 0; i < fruits.length; i++) {
    if (i === index) {
      [];
      fruit.push(newEntry);
    } else {
      fruit.push(fruits[i]);
    }
  }
  fruits = fruit;
  res.json(fruits);
});

router.use(express.json());
router.delete("/:id", (req, res) => {
  fruits.splice(req.params.id, 1);
  res.json(fruits);
});

module.exports = router;
