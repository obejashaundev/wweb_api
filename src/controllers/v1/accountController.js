
function signIn(req, res, next){
    res.send('sign in route')
}

function signUp(req, res, next) {
    res.send('sign up route')
}

module.exports = {
    signIn,
    signUp
}