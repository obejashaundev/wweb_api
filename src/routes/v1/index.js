const {Router} = require('express')
const router = Router()

const account = require('./accountRoutes')

router.use('/account', account)

module.exports = router