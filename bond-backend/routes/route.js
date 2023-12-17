const { Router } = require("express");
const userRouter = require("./user.route");

const router = Router();

router.use("/users", userRouter);

module.exports = router;
