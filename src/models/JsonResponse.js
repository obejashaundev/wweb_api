class JsonResponse {
    static ok = 'ok'
    static serverException = 'server exception'
    static notFoundException = 'not found exception'
    static unauthotizeException = 'unauthorize exception'
    constructor({ statusCode = 200, statusMessage = JsonResponse.ok, data = null, message = null }) {
        this.statusCode = statusCode
        this.statusMessage = statusMessage
        this.data = data
        this.message = message
    }
}
module.exports = JsonResponse