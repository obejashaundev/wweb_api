class accountController{
    signin = function(req, res, next) {
        res.send('sign in route')
    }
    signup = function(req, res, next) {
        res.send('sign up route')
    }
}

module.exports = new accountController()