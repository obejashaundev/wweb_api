const JsonResponse = require("../../models/JsonResponse")

function notfoundException(req, res) {
    res.status(404).json(new JsonResponse({ statusCode: 404, statusMessage: JsonResponse.notFoundException, message: req.message }))
}
function internalException(req, res) {
    res.status(500).json(new JsonResponse({ statusCode: 500, statusMessage: JsonResponse.internalException, message: req.message }))

}
function unauthorizeException(req, res){
    res.status(401).json(new JsonResponse({ statusCode: 401, statusMessage: JsonResponse.unauthotizeException, message: req.message }))
}


module.exports = {
    notfoundException,
    internalException,
    unauthorizeException
}