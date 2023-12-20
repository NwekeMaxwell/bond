const { Router } = require("express");
const userRouter = require("./user.route");
const authRouter = require("./auth.route");

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

module.exports = router;
