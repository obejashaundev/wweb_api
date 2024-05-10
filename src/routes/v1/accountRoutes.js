const { Router } = require('express')
const { signIn, signUp } = require('../../controllers/v1/accountController')
const { internalException, notfoundException, unauthorizeException} = require('../../controllers/v1/errorController')
const router = Router()

router.get('/signin', signIn, internalException)

router.get('/signup', signUp, internalException)

module.exports = router