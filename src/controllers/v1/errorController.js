const JsonResponse = require("../../models/JsonResponse")

class errorController {
    notfound = function(req, res) {
        res.status(400).json(new JsonResponse({ status: JsonResponse.error, message: req.message }))
    }
    internal = function(req, res) {
        res.status(500).json(new JsonResponse({ status: JsonResponse.error, message: req.message }))
    }
}

module.exports = new errorController()