const { Router } = require("express")
const authenticate = require('../middlewares/authentication')
const { validatePostInputs } = require('../middlewares/validate')
const { 
    createPost, 
    updatePost,
    deletePost, 
    getPost, 
    getPosts ,
    getUserPosts,
    getUserPostById,
    getUserPostsByHandle
} = require('../controllers/posts.controller')

const router = Router()

router.route('/')
.post(authenticate, validatePostInputs, createPost)
.get(authenticate, getPosts)

router.route('/:id')
.put(authenticate, updatePost)
.get(authenticate, getPost)
.delete(authenticate, deletePost)

router.route("/me").get(authenticate,  getUserPosts)

router.route("/me/:id").get(authenticate, getUserPostById)

router.route("/me/@:handle").get(authenticate, getUserPostsByHandle)

module.exports = router;