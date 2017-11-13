const express = require('express')
const router = express.Router()
const UsersController = require ('../controllers/usersController')

router.get('/', UsersController.findAll)
router.post('/', UsersController.create)
router.get('/:username', UsersController.findOne)
router.delete('/:username', UsersController.destroy)
router.put('/:username', UsersController.edit)

module.exports = router;