const {Router} = require('express')

const account = require('./accountRoutes')
const { notfoundException } = require('../../controllers/v1/errorController')

const router = Router()


router.use(notfoundException)
router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

router.use('/account', account)

module.exports = router