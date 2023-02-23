const express = require("express");
const router = express.Router();

let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users[req.params.id - 1];
  res.json(user);
});

router.use(express.json());
router.post("/", (req, res) => {
  const user = { name: req.body.name, age: req.body.age };
  users.push(user);
  res.json(users);
});

router.use(express.json());
router.put("/:id", (req, res) => {
  let index = Number(req.params.id);
  let user = [];
  let newEntry = { name: req.body.name, age: req.body.age };
  for (let i = 0; i < users.length; i++) {
    if (i === index) {
      [];
      user.push(newEntry);
    } else {
      user.push(users[i]);
    }
  }
  users = user;
  res.json(users);
});

router.use(express.json());
router.delete("/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.json(users);
});

module.exports = router;
