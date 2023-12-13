const express = require("express");
const router = express.Router();

// getting all
router.get("/", (req, res) => {
  res.send("got all");
});
// getting one
router.get("/:id", (req, res) => {
  //   req.params.id;
  res.send(req.params.id + " is the id");
});

//creating one
router.post("/", (req, res) => {
  res.send("created one");
});

//updating one
router.patch("/:id", (req, res) => {
  res.send("updated one", req.params.id);
});

//deleting one
router.delete("/:id", (req, res) => {
  res.send("deleted one", req.params.id);
});

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
