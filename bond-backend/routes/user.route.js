const { Router } = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserByHandle,
} = require("../controllers/user.controller");
const {
  getUserPosts,
  getUserPostById,
  getUserPostsByHandle,
} = require("../controllers/posts.controller");
const {
  getUserCommentById,
  getUserComments,
} = require("../controllers/comment.controller");
const authenticate = require("../middlewares/authentication");

const router = Router();

router.route("/").get(authenticate, getUsers);
// router.route("/").get([authenticate, 2ndMiddleware], getUsers); //you can add ur middlewares in an array to permit addition of multiple middlewares

router.route("/@:handle").get(authenticate, getUserByHandle);

router
  .route("/:id")
  .put(authenticate, updateUser)
  .delete(authenticate, deleteUser)
  .get(authenticate, getUser);

// using the user routes to get their posts
router.route('/@:handle/posts')
.get(authenticate, getUserPostsByHandle)

router.route('/:userid/posts')
.get(authenticate, getUserPosts)

router.route('/:userid/posts/:id')
.get(authenticate, getUserPostById)

// using the user routes to get their comments
router.route('/:userid/posts/:postid/comments')
.get(authenticate, getUserComments)

router.route('/:userid/posts/:postid/comments/:id')
.get(authenticate, getUserCommentById)

module.exports = router;
