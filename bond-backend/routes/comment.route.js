const { Router } = require('express')
const authenticate = require('../middlewares/authentication')
const { validateCommentInputs } = require('../middlewares/validate')
const { createComment, updateComment, deleteComment, getComment, getComments, 
} = require('../controllers/comment.controller')

const router = Router()

router.route('/posts/:postid/comments')
.post(authenticate, validateCommentInputs, createComment)
.get(authenticate, getComments)

router.route('/posts/:postid/comments/:id')
.put(authenticate, updateComment)
.get(authenticate, getComment)
.delete(authenticate, deleteComment)

module.exports = router;