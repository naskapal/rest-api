const express = require('express')
const router = express.Router()
const UsersController = require ('../controllers/usersController')
const Login = require('../middlewares/login');

router.post('/signup', UsersController.create)
router.post('/signin', UsersController.signIn)
router.get('/users', Login.isLogin, Login.isAdmin, UsersController.findAll)
router.get('/users/:username', Login.isLogin, UsersController.findOne)
router.post('/users', Login.isLogin, Login.isAdmin, UsersController.create)
router.delete('/users/:username', Login.isLogin, Login.isAdmin, UsersController.destroy)
router.put('/users/:username', Login.isLogin, Login.isOwner, UsersController.edit)

module.exports = router;