const express = require("express");
const router = express.Router();
const User = require("../models/users");

// getting all
router.get("/", async (req, res) => {
  // res.send("got all");
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getting one
router.get("/:id", getUser, (req, res) => {
  // res.send(req.params.id + " is the id");
  res.json(res.user);
});

//creating one
router.post("/", async (req, res) => {
  // res.send("created one");
  const user = new User({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//updating one
router.patch("/:id", getUser, async (req, res) => {
  // res.send("updated one", req.params.id);
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    res.user.subscribedToChannel = req.body.subscribedToChannel;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//deleting one
router.delete("/:id", getUser, async (req, res) => {
  // res.send("deleted one", req.params.id);
  try {
    await res.user.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}
module.exports = router;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// this file will basically not throw err with these codes:
// const express = require("express");
// const router = express.Router();
// module.exports = router;
// after creating the basic api endpoint functions, lets create a rest api to test
// install the vscode 'rest client' extension ans create a .rest file
//GET http://localhost:3000/users :::::::::this code returns the res.send result of the specified route

// status 201 - successfully created something
//write a middleware
