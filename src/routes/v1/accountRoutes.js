const { Router } = require('express')
const accountController = require('../../controllers/v1/accountController')
const errorController = require('../../controllers/v1/errorController')
const router = Router()

router.get('/signin', accountController.signin, errorController.internal)

router.get('/signup', accountController.signup, errorController.internal)

module.exports = router