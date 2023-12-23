const { Router } = require("express")
const authenticate = require('../middlewares/authentication')
const { validatePostInputs } = require('../middlewares/validate')
const { 
    createPost, 
    updatePost,
    deletePost, 
    getPost, 
    getPosts
} = require('../controllers/posts.controller')

const router = Router()

router.route('/')
.post(authenticate, validatePostInputs, createPost)
.get(authenticate, getPosts)

router.route('/:id')
.put(authenticate, updatePost)
.get(authenticate, getPost)
.delete(authenticate, deletePost)

module.exports = router;