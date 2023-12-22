const { Router } = require("express");
const userRouter = require("./user.route");
const authRouter = require("./auth.route");
const postsRouter = require("./posts.route");

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/posts", postsRouter);

module.exports = router;
