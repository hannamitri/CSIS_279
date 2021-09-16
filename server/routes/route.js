var express = require('express')
var router = express.Router()

var ControllerRoute = require('../controller/controller')

router.post('/updateUser', ControllerRoute.updateUser)
router.post('/insertUser', ControllerRoute.insertUser)
router.post('/deleteUser', ControllerRoute.deleteUser)
router.get('/getAllUsers', ControllerRoute.getAll)




module.exports = router