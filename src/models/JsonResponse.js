class JsonResponse {
    static success = 'success'
    static error = 'error'
    constructor({ status = JsonResponse.success, data = null, message = null }) {
        this.status = status
        this.data = data
        this.message = message
    }
}
module.exports = JsonResponse